import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteBranchInput:
    r"""DeleteBranchInput
    Represents the input of a delete branch operation.
    """
    
    branch_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
