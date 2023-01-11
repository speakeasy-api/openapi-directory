import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import language as shared_language


@dataclass_json
@dataclasses.dataclass
class LanguageList:
    r"""LanguageList
    Languages List
    """
    
    languages: list[shared_language.Language] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
