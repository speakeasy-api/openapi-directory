import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tablerow as shared_tablerow


@dataclass_json
@dataclasses.dataclass
class ListTableRowsResult:
    column_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIds') }})
    rows: list[shared_tablerow.TableRow] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    workbook_cursor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    row_ids_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIdsNotFound') }})
    
