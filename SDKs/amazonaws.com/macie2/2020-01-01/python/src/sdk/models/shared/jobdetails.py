import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import isdefinedinjob_enum as shared_isdefinedinjob_enum
from ..shared import ismonitoredbyjob_enum as shared_ismonitoredbyjob_enum


@dataclass_json
@dataclasses.dataclass
class JobDetails:
    r"""JobDetails
    Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
    """
    
    is_defined_in_job: Optional[shared_isdefinedinjob_enum.IsDefinedInJobEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefinedInJob') }})
    is_monitored_by_job: Optional[shared_ismonitoredbyjob_enum.IsMonitoredByJobEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMonitoredByJob') }})
    last_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastJobId') }})
    last_job_run_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastJobRunTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
