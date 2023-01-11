import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lexicon as shared_lexicon
from ..shared import lexiconattributes as shared_lexiconattributes


@dataclass_json
@dataclasses.dataclass
class GetLexiconOutput:
    lexicon: Optional[shared_lexicon.Lexicon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lexicon') }})
    lexicon_attributes: Optional[shared_lexiconattributes.LexiconAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LexiconAttributes') }})
    
