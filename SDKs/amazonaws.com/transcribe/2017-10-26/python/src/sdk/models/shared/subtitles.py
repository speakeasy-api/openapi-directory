import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subtitleformat_enum as shared_subtitleformat_enum


@dataclass_json
@dataclasses.dataclass
class Subtitles:
    r"""Subtitles
    Generate subtitles for your batch transcription job.
    """
    
    formats: Optional[list[shared_subtitleformat_enum.SubtitleFormatEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Formats') }})
    
