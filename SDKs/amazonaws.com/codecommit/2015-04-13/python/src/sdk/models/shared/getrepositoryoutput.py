import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorymetadata as shared_repositorymetadata


@dataclass_json
@dataclasses.dataclass
class GetRepositoryOutput:
    r"""GetRepositoryOutput
    Represents the output of a get repository operation.
    """
    
    repository_metadata: Optional[shared_repositorymetadata.RepositoryMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryMetadata') }})
    
