import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3bucketcriteriaforjob as shared_s3bucketcriteriaforjob
from ..shared import s3bucketdefinitionforjob as shared_s3bucketdefinitionforjob
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import jobtype_enum as shared_jobtype_enum
from ..shared import lastrunerrorstatus as shared_lastrunerrorstatus
from ..shared import userpauseddetails as shared_userpauseddetails


@dataclass_json
@dataclasses.dataclass
class JobSummary:
    r"""JobSummary
    Provides information about a classification job, including the current status of the job.
    """
    
    bucket_criteria: Optional[shared_s3bucketcriteriaforjob.S3BucketCriteriaForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[list[shared_s3bucketdefinitionforjob.S3BucketDefinitionForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    last_run_error_status: Optional[shared_lastrunerrorstatus.LastRunErrorStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunErrorStatus') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_paused_details: Optional[shared_userpauseddetails.UserPausedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPausedDetails') }})
    
