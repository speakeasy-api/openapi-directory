import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resultset as shared_resultset


@dataclass_json
@dataclasses.dataclass
class GetScreenDataResult:
    results: dict[str, shared_resultset.ResultSet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    workbook_cursor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
