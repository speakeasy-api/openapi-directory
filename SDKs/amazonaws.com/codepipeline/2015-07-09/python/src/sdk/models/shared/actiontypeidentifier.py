import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncategory_enum as shared_actioncategory_enum


@dataclass_json
@dataclasses.dataclass
class ActionTypeIdentifier:
    r"""ActionTypeIdentifier
    Specifies the category, owner, provider, and version of the action type.
    """
    
    category: shared_actioncategory_enum.ActionCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
