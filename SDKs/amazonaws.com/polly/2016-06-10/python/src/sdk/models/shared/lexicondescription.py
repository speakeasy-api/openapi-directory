import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lexiconattributes as shared_lexiconattributes


@dataclass_json
@dataclasses.dataclass
class LexiconDescription:
    r"""LexiconDescription
    Describes the content of the lexicon.
    """
    
    attributes: Optional[shared_lexiconattributes.LexiconAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
