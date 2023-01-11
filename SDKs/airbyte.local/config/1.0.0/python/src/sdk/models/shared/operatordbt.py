import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OperatorDbt:
    git_repo_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitRepoUrl') }})
    dbt_arguments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbtArguments') }})
    docker_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImage') }})
    git_repo_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitRepoBranch') }})
    
