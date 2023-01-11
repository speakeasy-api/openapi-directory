import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectDuplicateRequestIncludeEnum(str, Enum):
    MEMBERS = "members"
    NOTES = "notes"
    FORMS = "forms"
    TASK_NOTES = "task_notes"
    TASK_ASSIGNEE = "task_assignee"
    TASK_SUBTASKS = "task_subtasks"
    TASK_ATTACHMENTS = "task_attachments"
    TASK_DATES = "task_dates"
    TASK_DEPENDENCIES = "task_dependencies"
    TASK_FOLLOWERS = "task_followers"
    TASK_TAGS = "task_tags"
    TASK_PROJECTS = "task_projects"


@dataclass_json
@dataclasses.dataclass
class ProjectDuplicateRequestScheduleDates:
    r"""ProjectDuplicateRequestScheduleDates
    A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
    """
    
    should_skip_weekends: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('should_skip_weekends') }})
    due_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    start_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectDuplicateRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    include: Optional[ProjectDuplicateRequestIncludeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    schedule_dates: Optional[ProjectDuplicateRequestScheduleDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_dates') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
