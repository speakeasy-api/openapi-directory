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
    Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
    """
    
    cells: Optional[list[shared_cell.Cell]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    line_ranges: Optional[list[shared_range.Range]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineRanges') }})
    offset_ranges: Optional[list[shared_range.Range]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRanges') }})
    pages: Optional[list[shared_page.Page]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    records: Optional[list[shared_record.Record]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    
