import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import absolutetimerange as shared_absolutetimerange
from ..shared import participantrole_enum as shared_participantrole_enum
from ..shared import relativetimerange as shared_relativetimerange
from ..shared import transcriptfiltertype_enum as shared_transcriptfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class TranscriptFilter:
    r"""TranscriptFilter
    Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
    """
    
    targets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    transcript_filter_type: shared_transcriptfiltertype_enum.TranscriptFilterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFilterType') }})
    absolute_time_range: Optional[shared_absolutetimerange.AbsoluteTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    participant_role: Optional[shared_participantrole_enum.ParticipantRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    relative_time_range: Optional[shared_relativetimerange.RelativeTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    
