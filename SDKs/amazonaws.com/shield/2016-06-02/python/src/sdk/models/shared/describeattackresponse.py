import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attackdetail as shared_attackdetail


@dataclass_json
@dataclasses.dataclass
class DescribeAttackResponse:
    attack: Optional[shared_attackdetail.AttackDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attack') }})
    
