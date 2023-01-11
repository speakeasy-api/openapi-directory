import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commit as shared_commit


@dataclass_json
@dataclasses.dataclass
class GetCommitOutput:
    r"""GetCommitOutput
    Represents the output of a get commit operation.
    """
    
    commit: shared_commit.Commit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    
