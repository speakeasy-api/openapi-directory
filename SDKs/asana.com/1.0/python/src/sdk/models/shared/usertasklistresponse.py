import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserTaskListResponseOwner:
    r"""UserTaskListResponseOwner
    A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class UserTaskListResponseWorkspace:
    r"""UserTaskListResponseWorkspace
    A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class UserTaskListResponse:
    r"""UserTaskListResponse
    A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[UserTaskListResponseOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    workspace: Optional[UserTaskListResponseWorkspace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
