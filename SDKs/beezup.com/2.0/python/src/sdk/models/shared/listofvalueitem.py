import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListOfValueItem:
    r"""ListOfValueItem
    This object is used by LOV apis
    """
    
    code_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeIdentifier') }})
    int_identifier: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intIdentifier') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    translation_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationText') }})
    
