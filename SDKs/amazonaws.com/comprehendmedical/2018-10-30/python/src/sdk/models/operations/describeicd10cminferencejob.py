import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeicd10cminferencejobrequest as shared_describeicd10cminferencejobrequest
from ..shared import describeicd10cminferencejobresponse as shared_describeicd10cminferencejobresponse

class DescribeIcd10CmInferenceJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_DESCRIBE_ICD10_CM_INFERENCE_JOB = "ComprehendMedical_20181030.DescribeICD10CMInferenceJob"


@dataclasses.dataclass
class DescribeIcd10CmInferenceJobHeaders:
    x_amz_target: DescribeIcd10CmInferenceJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeIcd10CmInferenceJobRequest:
    headers: DescribeIcd10CmInferenceJobHeaders = dataclasses.field()
    request: shared_describeicd10cminferencejobrequest.DescribeIcd10CmInferenceJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeIcd10CmInferenceJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_icd10_cm_inference_job_response: Optional[shared_describeicd10cminferencejobresponse.DescribeIcd10CmInferenceJobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
