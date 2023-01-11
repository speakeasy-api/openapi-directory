import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attackvolume as shared_attackvolume


@dataclass_json
@dataclasses.dataclass
class AttackStatisticsDataItem:
    r"""AttackStatisticsDataItem
    A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. 
    """
    
    attack_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackCount') }})
    attack_volume: Optional[shared_attackvolume.AttackVolume] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackVolume') }})
    
