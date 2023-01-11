import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offsetinfo as shared_offsetinfo
from ..shared import electionslist as shared_electionslist


@dataclass_json
@dataclasses.dataclass
class ElectionsListPage:
    pagination: Optional[shared_offsetinfo.OffsetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[list[shared_electionslist.ElectionsList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
