import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagereportschedule_enum as shared_usagereportschedule_enum
from ..shared import lastreportgenerationexecutionerror as shared_lastreportgenerationexecutionerror


@dataclass_json
@dataclasses.dataclass
class UsageReportSubscription:
    r"""UsageReportSubscription
    Describes information about the usage report subscription.
    """
    
    last_generated_report_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastGeneratedReportDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    schedule: Optional[shared_usagereportschedule_enum.UsageReportScheduleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    subscription_errors: Optional[list[shared_lastreportgenerationexecutionerror.LastReportGenerationExecutionError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionErrors') }})
    
