import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaigneventfilter as shared_campaigneventfilter
from ..shared import frequency_enum as shared_frequency_enum
from ..shared import quiettime as shared_quiettime


@dataclass_json
@dataclasses.dataclass
class Schedule:
    r"""Schedule
    Specifies the schedule settings for a campaign.
    """
    
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    event_filter: Optional[shared_campaigneventfilter.CampaignEventFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    frequency: Optional[shared_frequency_enum.FrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    is_local_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLocalTime') }})
    quiet_time: Optional[shared_quiettime.QuietTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    
