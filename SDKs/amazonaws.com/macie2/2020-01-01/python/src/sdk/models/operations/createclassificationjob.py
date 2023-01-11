import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3bucketcriteriaforjob as shared_s3bucketcriteriaforjob
from ..shared import s3bucketdefinitionforjob as shared_s3bucketdefinitionforjob
from ..shared import scoping as shared_scoping
from ..shared import monthlyschedule as shared_monthlyschedule
from ..shared import weeklyschedule as shared_weeklyschedule
from ..shared import createclassificationjobresponse as shared_createclassificationjobresponse


@dataclasses.dataclass
class CreateClassificationJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateClassificationJobRequestBodyJobTypeEnum(str, Enum):
    ONE_TIME = "ONE_TIME"
    SCHEDULED = "SCHEDULED"

class CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum(str, Enum):
    ALL = "ALL"
    EXCLUDE = "EXCLUDE"
    INCLUDE = "INCLUDE"
    NONE = "NONE"


@dataclass_json
@dataclasses.dataclass
class CreateClassificationJobRequestBodyS3JobDefinition:
    r"""CreateClassificationJobRequestBodyS3JobDefinition
    Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
    """
    
    bucket_criteria: Optional[shared_s3bucketcriteriaforjob.S3BucketCriteriaForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[list[shared_s3bucketdefinitionforjob.S3BucketDefinitionForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    scoping: Optional[shared_scoping.Scoping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoping') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateClassificationJobRequestBodyScheduleFrequency:
    r"""CreateClassificationJobRequestBodyScheduleFrequency
    Specifies the recurrence pattern for running a classification job.
    """
    
    daily_schedule: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    monthly_schedule: Optional[shared_monthlyschedule.MonthlySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    weekly_schedule: Optional[shared_weeklyschedule.WeeklySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateClassificationJobRequestBody:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    job_type: CreateClassificationJobRequestBodyJobTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_job_definition: CreateClassificationJobRequestBodyS3JobDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3JobDefinition') }})
    custom_data_identifier_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifierIds') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    initial_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialRun') }})
    managed_data_identifier_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierIds') }})
    managed_data_identifier_selector: Optional[CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDataIdentifierSelector') }})
    sampling_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingPercentage') }})
    schedule_frequency: Optional[CreateClassificationJobRequestBodyScheduleFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleFrequency') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateClassificationJobRequest:
    headers: CreateClassificationJobHeaders = dataclasses.field()
    request: CreateClassificationJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateClassificationJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_classification_job_response: Optional[shared_createclassificationjobresponse.CreateClassificationJobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
