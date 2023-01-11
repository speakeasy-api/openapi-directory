import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorsummary as shared_connectorsummary


@dataclass_json
@dataclasses.dataclass
class ListConnectorsResponse:
    connectors: Optional[list[shared_connectorsummary.ConnectorSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
