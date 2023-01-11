import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GitHubCodeDestination:
    r"""GitHubCodeDestination
    Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
    """
    
    issues_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuesEnabled') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private_repository: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateRepository') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
