import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import byoipcidr as shared_byoipcidr


@dataclass_json
@dataclasses.dataclass
class ListByoipCidrsResponse:
    byoip_cidrs: Optional[list[shared_byoipcidr.ByoipCidr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByoipCidrs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
