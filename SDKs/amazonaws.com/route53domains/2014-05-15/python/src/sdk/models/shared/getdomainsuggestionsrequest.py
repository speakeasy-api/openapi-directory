import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDomainSuggestionsRequest:
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    only_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnlyAvailable') }})
    suggestion_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuggestionCount') }})
    
