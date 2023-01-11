import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteAliasRequest:
    alias: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    entity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    
