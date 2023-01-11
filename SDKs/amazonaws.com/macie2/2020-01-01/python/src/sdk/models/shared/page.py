import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import range as shared_range


@dataclass_json
@dataclasses.dataclass
class Page:
    r"""Page
    Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
    """
    
    line_range: Optional[shared_range.Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineRange') }})
    offset_range: Optional[shared_range.Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRange') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    
