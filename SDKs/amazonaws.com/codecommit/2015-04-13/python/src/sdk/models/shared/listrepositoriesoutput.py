import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorynameidpair as shared_repositorynameidpair


@dataclass_json
@dataclasses.dataclass
class ListRepositoriesOutput:
    r"""ListRepositoriesOutput
    Represents the output of a list repositories operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    repositories: Optional[list[shared_repositorynameidpair.RepositoryNameIDPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    
