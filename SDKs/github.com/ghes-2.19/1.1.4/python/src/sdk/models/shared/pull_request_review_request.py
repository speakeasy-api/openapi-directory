import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_simple as shared_team_simple
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class PullRequestReviewRequest:
    r"""PullRequestReviewRequest
    Pull Request Review Request
    """
    
    teams: list[shared_team_simple.TeamSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: list[shared_simple_user.SimpleUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
