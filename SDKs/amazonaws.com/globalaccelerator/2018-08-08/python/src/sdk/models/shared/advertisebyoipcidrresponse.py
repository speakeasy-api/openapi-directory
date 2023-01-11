import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import byoipcidr as shared_byoipcidr


@dataclass_json
@dataclasses.dataclass
class AdvertiseByoipCidrResponse:
    byoip_cidr: Optional[shared_byoipcidr.ByoipCidr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByoipCidr') }})
    
