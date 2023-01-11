import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lexicondescription as shared_lexicondescription


@dataclass_json
@dataclasses.dataclass
class ListLexiconsOutput:
    lexicons: Optional[list[shared_lexicondescription.LexiconDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lexicons') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
