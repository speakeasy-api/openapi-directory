import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cell as shared_cell


@dataclass_json
@dataclasses.dataclass
class TableRow:
    r"""TableRow
    An object that contains attributes about a single row in a table
    """
    
    cells: list[shared_cell.Cell] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    row_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowId') }})
    
