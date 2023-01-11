import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import initiatedby_enum as shared_initiatedby_enum
from ..shared import participatingserver as shared_participatingserver
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import jobtype_enum as shared_jobtype_enum


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    Job.
    """
    
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobID') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime') }})
    end_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateTime') }})
    initiated_by: Optional[shared_initiatedby_enum.InitiatedByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedBy') }})
    participating_servers: Optional[list[shared_participatingserver.ParticipatingServer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participatingServers') }})
    status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
