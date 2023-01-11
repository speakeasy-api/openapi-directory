import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partofspeechtag as shared_partofspeechtag


@dataclass_json
@dataclasses.dataclass
class SyntaxToken:
    r"""SyntaxToken
    Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
    """
    
    begin_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    end_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    part_of_speech: Optional[shared_partofspeechtag.PartOfSpeechTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartOfSpeech') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    token_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenId') }})
    
