import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchforpositionresult as shared_searchforpositionresult
from ..shared import searchplaceindexforpositionsummary as shared_searchplaceindexforpositionsummary


@dataclass_json
@dataclasses.dataclass
class SearchPlaceIndexForPositionResponse:
    results: list[shared_searchforpositionresult.SearchForPositionResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    summary: shared_searchplaceindexforpositionsummary.SearchPlaceIndexForPositionSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
