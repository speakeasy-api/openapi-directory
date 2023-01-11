import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issuedetected as shared_issuedetected
from ..shared import sentimentvalue_enum as shared_sentimentvalue_enum


@dataclass_json
@dataclasses.dataclass
class Transcript:
    r"""Transcript
    A list of messages in the session.
    """
    
    begin_offset_millis: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffsetMillis') }})
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    end_offset_millis: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffsetMillis') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    participant_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantId') }})
    participant_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    sentiment: shared_sentimentvalue_enum.SentimentValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiment') }})
    issues_detected: Optional[list[shared_issuedetected.IssueDetected]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuesDetected') }})
    
