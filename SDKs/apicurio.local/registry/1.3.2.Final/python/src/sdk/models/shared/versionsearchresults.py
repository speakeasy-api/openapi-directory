import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchedversion as shared_searchedversion


@dataclass_json
@dataclasses.dataclass
class VersionSearchResults:
    r"""VersionSearchResults
    Describes the response received when searching for artifacts.
    """
    
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    versions: list[shared_searchedversion.SearchedVersion] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
