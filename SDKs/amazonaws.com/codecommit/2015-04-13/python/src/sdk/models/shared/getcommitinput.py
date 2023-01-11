import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetCommitInput:
    r"""GetCommitInput
    Represents the input of a get commit operation.
    """
    
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
