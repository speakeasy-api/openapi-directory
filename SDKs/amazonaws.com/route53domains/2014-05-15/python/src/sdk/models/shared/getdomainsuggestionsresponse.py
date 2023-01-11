import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainsuggestion as shared_domainsuggestion


@dataclass_json
@dataclasses.dataclass
class GetDomainSuggestionsResponse:
    suggestions_list: Optional[list[shared_domainsuggestion.DomainSuggestion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuggestionsList') }})
    
