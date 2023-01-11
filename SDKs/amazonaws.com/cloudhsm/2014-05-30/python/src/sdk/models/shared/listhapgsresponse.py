import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListHapgsResponse:
    hapg_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
