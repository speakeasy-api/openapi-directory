import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncategory_enum as shared_actioncategory_enum


@dataclass_json
@dataclasses.dataclass
class DeleteCustomActionTypeInput:
    r"""DeleteCustomActionTypeInput
    Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
    """
    
    category: shared_actioncategory_enum.ActionCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
