import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suggestionmatch as shared_suggestionmatch


@dataclass_json
@dataclasses.dataclass
class SuggestModel:
    r"""SuggestModel
    Container for the suggestion information returned in a <code>SuggestResponse</code>.
    """
    
    found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    suggestions: Optional[list[shared_suggestionmatch.SuggestionMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
