import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tablecolumn as shared_tablecolumn


@dataclass_json
@dataclasses.dataclass
class ListTableColumnsResult:
    table_columns: list[shared_tablecolumn.TableColumn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    workbook_cursor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    
