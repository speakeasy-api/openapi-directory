import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HoldoutActivity:
    r"""HoldoutActivity
    Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
    """
    
    percentage: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    next_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    
