import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codecommitcodedestination as shared_codecommitcodedestination
from ..shared import githubcodedestination as shared_githubcodedestination


@dataclass_json
@dataclasses.dataclass
class CodeDestination:
    r"""CodeDestination
    The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
    """
    
    code_commit: Optional[shared_codecommitcodedestination.CodeCommitCodeDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeCommit') }})
    git_hub: Optional[shared_githubcodedestination.GitHubCodeDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitHub') }})
    
