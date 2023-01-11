import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offsetinfo as shared_offsetinfo
from ..shared import presidentialbysize as shared_presidentialbysize


@dataclass_json
@dataclasses.dataclass
class PresidentialBySizePage:
    pagination: Optional[shared_offsetinfo.OffsetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[list[shared_presidentialbysize.PresidentialBySize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
