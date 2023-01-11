import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BranchShortCommit:
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchShort:
    r"""BranchShort
    Branch Short
    """
    
    commit: BranchShortCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    
