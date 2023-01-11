import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import table as shared_table


@dataclass_json
@dataclasses.dataclass
class ListTablesResult:
    tables: list[shared_table.Table] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    workbook_cursor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    
