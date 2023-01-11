import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorconfiguration as shared_connectorconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeConnectorsResponse:
    connector_configurations: Optional[dict[str, shared_connectorconfiguration.ConnectorConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfigurations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
