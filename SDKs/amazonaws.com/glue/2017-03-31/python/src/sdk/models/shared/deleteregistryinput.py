import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registryid as shared_registryid


@dataclass_json
@dataclasses.dataclass
class DeleteRegistryInput:
    registry_id: shared_registryid.RegistryID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryId') }})
    
