import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagereportschedule_enum as shared_usagereportschedule_enum


@dataclass_json
@dataclasses.dataclass
class CreateUsageReportSubscriptionResult:
    s3_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    schedule: Optional[shared_usagereportschedule_enum.UsageReportScheduleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    
