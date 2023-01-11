import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cell as shared_cell
from ..shared import range as shared_range
from ..shared import page as shared_page
from ..shared import record as shared_record


@dataclass_json
@dataclasses.dataclass
class Occurrences:
    r"""Occurrences
    The detected occurrences of sensitive data.
    """
    
    cells: Optional[list[shared_cell.Cell]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cells') }})
    line_ranges: Optional[list[shared_range.Range]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineRanges') }})
    offset_ranges: Optional[list[shared_range.Range]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffsetRanges') }})
    pages: Optional[list[shared_page.Page]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pages') }})
    records: Optional[list[shared_record.Record]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    
