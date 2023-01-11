import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storesharelinks as shared_storesharelinks
from ..shared import storeuserrole_enum as shared_storeuserrole_enum


@dataclass_json
@dataclasses.dataclass
class StoreShare:
    links: shared_storesharelinks.StoreShareLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    user_role: shared_storeuserrole_enum.StoreUserRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRole') }})
    
