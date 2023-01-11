import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import range as shared_range


@dataclass_json
@dataclasses.dataclass
class Page:
    r"""Page
    An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
    """
    
    line_range: Optional[shared_range.Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineRange') }})
    offset_range: Optional[shared_range.Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffsetRange') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    
