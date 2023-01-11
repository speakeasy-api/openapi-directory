import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetAccessControlEffectRequest:
    action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
