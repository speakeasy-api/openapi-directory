import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vocabularyfiltermethod_enum as shared_vocabularyfiltermethod_enum


@dataclass_json
@dataclasses.dataclass
class Settings:
    r"""Settings
    Provides optional settings for the <code>StartTranscriptionJob</code> operation.
    """
    
    channel_identification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelIdentification') }})
    max_alternatives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAlternatives') }})
    max_speaker_labels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSpeakerLabels') }})
    show_alternatives: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowAlternatives') }})
    show_speaker_labels: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowSpeakerLabels') }})
    vocabulary_filter_method: Optional[shared_vocabularyfiltermethod_enum.VocabularyFilterMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterMethod') }})
    vocabulary_filter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterName') }})
    vocabulary_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    
