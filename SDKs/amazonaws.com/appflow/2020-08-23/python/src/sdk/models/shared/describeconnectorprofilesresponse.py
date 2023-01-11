import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorprofile as shared_connectorprofile


@dataclass_json
@dataclasses.dataclass
class DescribeConnectorProfilesResponse:
    connector_profile_details: Optional[list[shared_connectorprofile.ConnectorProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
