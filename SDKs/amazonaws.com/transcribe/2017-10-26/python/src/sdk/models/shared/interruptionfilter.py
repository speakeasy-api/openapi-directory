import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import absolutetimerange as shared_absolutetimerange
from ..shared import participantrole_enum as shared_participantrole_enum
from ..shared import relativetimerange as shared_relativetimerange


@dataclass_json
@dataclasses.dataclass
class InterruptionFilter:
    r"""InterruptionFilter
    An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
    """
    
    absolute_time_range: Optional[shared_absolutetimerange.AbsoluteTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    participant_role: Optional[shared_participantrole_enum.ParticipantRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    relative_time_range: Optional[shared_relativetimerange.RelativeTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    
