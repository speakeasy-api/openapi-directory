import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorymetadata as shared_repositorymetadata


@dataclass_json
@dataclasses.dataclass
class BatchGetRepositoriesOutput:
    r"""BatchGetRepositoriesOutput
    Represents the output of a batch get repositories operation.
    """
    
    repositories: Optional[list[shared_repositorymetadata.RepositoryMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repositories_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoriesNotFound') }})
    
