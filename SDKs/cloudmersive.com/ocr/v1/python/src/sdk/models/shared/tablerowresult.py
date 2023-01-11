import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tablecellresult as shared_tablecellresult


@dataclass_json
@dataclasses.dataclass
class TableRowResult:
    r"""TableRowResult
    One row of data in the resulting table
    """
    
    table_row_cells_result: Optional[list[shared_tablecellresult.TableCellResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableRowCellsResult') }})
    
