import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_user as shared_scim_user


@dataclass_json
@dataclasses.dataclass
class ScimUserList:
    r"""ScimUserList
    SCIM User List
    """
    
    resources: list[shared_scim_user.ScimUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    items_per_page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    start_index: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
