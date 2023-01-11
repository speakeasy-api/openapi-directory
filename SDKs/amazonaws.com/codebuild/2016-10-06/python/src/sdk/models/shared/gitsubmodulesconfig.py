import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GitSubmodulesConfig:
    r"""GitSubmodulesConfig
     Information about the Git submodules configuration for an CodeBuild build project. 
    """
    
    fetch_submodules: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchSubmodules') }})
    
