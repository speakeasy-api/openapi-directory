import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemtype_enum as shared_itemtype_enum
from ..shared import itemvalue as shared_itemvalue


@dataclass_json
@dataclasses.dataclass
class ItemIdentifier:
    r"""ItemIdentifier
    Details and type of a related item.
    """
    
    type: shared_itemtype_enum.ItemTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: shared_itemvalue.ItemValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
