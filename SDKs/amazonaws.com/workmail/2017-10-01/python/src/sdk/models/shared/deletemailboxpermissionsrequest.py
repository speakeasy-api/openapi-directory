import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteMailboxPermissionsRequest:
    entity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    grantee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeId') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    
