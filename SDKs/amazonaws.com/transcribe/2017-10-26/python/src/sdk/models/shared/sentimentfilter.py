import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import absolutetimerange as shared_absolutetimerange
from ..shared import participantrole_enum as shared_participantrole_enum
from ..shared import relativetimerange as shared_relativetimerange
from ..shared import sentimentvalue_enum as shared_sentimentvalue_enum


@dataclass_json
@dataclasses.dataclass
class SentimentFilter:
    r"""SentimentFilter
    An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
    """
    
    sentiments: list[shared_sentimentvalue_enum.SentimentValueEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiments') }})
    absolute_time_range: Optional[shared_absolutetimerange.AbsoluteTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    participant_role: Optional[shared_participantrole_enum.ParticipantRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    relative_time_range: Optional[shared_relativetimerange.RelativeTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    
