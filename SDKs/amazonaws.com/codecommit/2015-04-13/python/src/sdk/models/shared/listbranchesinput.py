import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListBranchesInput:
    r"""ListBranchesInput
    Represents the input of a list branches operation.
    """
    
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
