import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchresult as shared_searchresult


@dataclass_json
@dataclasses.dataclass
class PackageSearchResult:
    package: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    results: list[shared_searchresult.SearchResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
