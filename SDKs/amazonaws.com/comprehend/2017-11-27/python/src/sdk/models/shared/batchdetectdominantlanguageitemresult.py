import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dominantlanguage as shared_dominantlanguage


@dataclass_json
@dataclasses.dataclass
class BatchDetectDominantLanguageItemResult:
    r"""BatchDetectDominantLanguageItemResult
    The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    languages: Optional[list[shared_dominantlanguage.DominantLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Languages') }})
    
