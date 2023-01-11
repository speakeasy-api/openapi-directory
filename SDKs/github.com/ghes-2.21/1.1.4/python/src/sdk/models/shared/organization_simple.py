import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrganizationSimple:
    r"""OrganizationSimple
    Organization Simple
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    hooks_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issues_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    members_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    public_members_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_members_url') }})
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
