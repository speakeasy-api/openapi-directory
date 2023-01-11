import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyphrase as shared_keyphrase


@dataclass_json
@dataclasses.dataclass
class BatchDetectKeyPhrasesItemResult:
    r"""BatchDetectKeyPhrasesItemResult
    The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    key_phrases: Optional[list[shared_keyphrase.KeyPhrase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPhrases') }})
    
