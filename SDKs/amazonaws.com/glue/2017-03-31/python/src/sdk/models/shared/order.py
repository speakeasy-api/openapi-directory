import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Order:
    r"""Order
    Specifies the sort order of a sorted column.
    """
    
    column: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    sort_order: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
