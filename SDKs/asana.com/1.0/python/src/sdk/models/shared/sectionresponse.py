import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectcompact as shared_projectcompact


@dataclass_json
@dataclasses.dataclass
class SectionResponse:
    r"""SectionResponse
    A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project: Optional[shared_projectcompact.ProjectCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    projects: Optional[list[shared_projectcompact.ProjectCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
