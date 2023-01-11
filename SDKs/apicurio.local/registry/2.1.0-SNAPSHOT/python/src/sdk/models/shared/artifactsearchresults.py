import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchedartifact as shared_searchedartifact


@dataclass_json
@dataclasses.dataclass
class ArtifactSearchResults:
    r"""ArtifactSearchResults
    Describes the response received when searching for artifacts.
    """
    
    artifacts: list[shared_searchedartifact.SearchedArtifact] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    
