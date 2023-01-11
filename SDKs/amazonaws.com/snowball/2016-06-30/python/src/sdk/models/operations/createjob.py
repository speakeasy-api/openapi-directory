import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createjobrequest as shared_createjobrequest
from ..shared import createjobresult as shared_createjobresult

class CreateJobXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_JOB = "AWSIESnowballJobManagementService.CreateJob"


@dataclasses.dataclass
class CreateJobHeaders:
    x_amz_target: CreateJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateJobRequest:
    headers: CreateJobHeaders = dataclasses.field()
    request: shared_createjobrequest.CreateJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    create_job_result: Optional[shared_createjobresult.CreateJobResult] = dataclasses.field(default=None)
    ec2_request_failed_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_exception: Optional[Any] = dataclasses.field(default=None)
    kms_request_failed_exception: Optional[Any] = dataclasses.field(default=None)
    
