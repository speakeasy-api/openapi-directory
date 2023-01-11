import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchfortextresult as shared_searchfortextresult
from ..shared import searchplaceindexfortextsummary as shared_searchplaceindexfortextsummary


@dataclass_json
@dataclasses.dataclass
class SearchPlaceIndexForTextResponse:
    results: list[shared_searchfortextresult.SearchForTextResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    summary: shared_searchplaceindexfortextsummary.SearchPlaceIndexForTextSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
