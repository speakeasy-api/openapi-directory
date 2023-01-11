import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interruptionfilter as shared_interruptionfilter
from ..shared import nontalktimefilter as shared_nontalktimefilter
from ..shared import sentimentfilter as shared_sentimentfilter
from ..shared import transcriptfilter as shared_transcriptfilter


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    A condition in the call between the customer and the agent that you want to filter for.
    """
    
    interruption_filter: Optional[shared_interruptionfilter.InterruptionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterruptionFilter') }})
    non_talk_time_filter: Optional[shared_nontalktimefilter.NonTalkTimeFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonTalkTimeFilter') }})
    sentiment_filter: Optional[shared_sentimentfilter.SentimentFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentFilter') }})
    transcript_filter: Optional[shared_transcriptfilter.TranscriptFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFilter') }})
    
