import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subtitleformat_enum as shared_subtitleformat_enum


@dataclass_json
@dataclasses.dataclass
class SubtitlesOutput:
    r"""SubtitlesOutput
    Specify the output format for your subtitle file.
    """
    
    formats: Optional[list[shared_subtitleformat_enum.SubtitleFormatEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Formats') }})
    subtitle_file_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleFileUris') }})
    
