import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectcompact as shared_projectcompact
from ..shared import sectioncompact as shared_sectioncompact
from ..shared import usercompact as shared_usercompact
from ..shared import customfieldresponse as shared_customfieldresponse
from ..shared import asanaresource as shared_asanaresource
from ..shared import like as shared_like
from ..shared import tagcompact as shared_tagcompact

class TaskResponseApprovalStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"


@dataclass_json
@dataclasses.dataclass
class TaskResponseAssignee:
    r"""TaskResponseAssignee
    A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class TaskResponseAssigneeSection:
    r"""TaskResponseAssigneeSection
    The *assignee section* is a subdivision of a project that groups tasks together in the assignee's \"My Tasks\" list. It can either be a header above a list of tasks in a list view or a column in a board view of \"My Tasks.\"
    The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's \"My Tasks\" list.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class TaskResponseAssigneeStatusEnum(str, Enum):
    TODAY = "today"
    UPCOMING = "upcoming"
    LATER = "later"
    NEW = "new"
    INBOX = "inbox"


@dataclass_json
@dataclasses.dataclass
class TaskResponseExternal:
    r"""TaskResponseExternal
    *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
    The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
    """
    
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    

@dataclass_json
@dataclasses.dataclass
class TaskResponseMemberships:
    project: Optional[shared_projectcompact.ProjectCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    section: Optional[shared_sectioncompact.SectionCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    

@dataclass_json
@dataclasses.dataclass
class TaskResponseParent:
    r"""TaskResponseParent
    The parent of this task, or `null` if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the `setParent` endpoint. You can create subtasks by using the subtasks endpoint.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class TaskResponseResourceSubtypeEnum(str, Enum):
    DEFAULT_TASK = "default_task"
    MILESTONE = "milestone"
    SECTION = "section"
    APPROVAL = "approval"


@dataclass_json
@dataclasses.dataclass
class TaskResponseWorkspace:
    r"""TaskResponseWorkspace
    *Create-only*. The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclasses.dataclass
class TaskResponse:
    r"""TaskResponse
    The *task* is the basic object around which many operations in Asana are centered.
    """
    
    approval_status: Optional[TaskResponseApprovalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_status') }})
    assignee: Optional[TaskResponseAssignee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assignee_section: Optional[TaskResponseAssigneeSection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_section') }})
    assignee_status: Optional[TaskResponseAssigneeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_status') }})
    completed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    completed_by: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_by') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[list[shared_customfieldresponse.CustomFieldResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    dependencies: Optional[list[shared_asanaresource.AsanaResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencies') }})
    dependents: Optional[list[shared_asanaresource.AsanaResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependents') }})
    due_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[TaskResponseExternal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    followers: Optional[list[shared_usercompact.UserCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    hearted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearted') }})
    hearts: Optional[list[shared_like.Like]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearts') }})
    html_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_rendered_as_separator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_rendered_as_separator') }})
    liked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    likes: Optional[list[shared_like.Like]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    memberships: Optional[list[TaskResponseMemberships]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    modified_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    num_hearts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hearts') }})
    num_likes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_likes') }})
    num_subtasks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_subtasks') }})
    parent: Optional[TaskResponseParent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    permalink_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    projects: Optional[list[shared_projectcompact.ProjectCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    resource_subtype: Optional[TaskResponseResourceSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[list[shared_tagcompact.TagCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    workspace: Optional[TaskResponseWorkspace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
