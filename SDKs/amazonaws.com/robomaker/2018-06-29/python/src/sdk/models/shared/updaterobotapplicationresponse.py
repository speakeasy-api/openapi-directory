import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment
from ..shared import robotsoftwaresuite as shared_robotsoftwaresuite
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class UpdateRobotApplicationResponse:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    robot_software_suite: Optional[shared_robotsoftwaresuite.RobotSoftwareSuite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    sources: Optional[list[shared_source.Source]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
