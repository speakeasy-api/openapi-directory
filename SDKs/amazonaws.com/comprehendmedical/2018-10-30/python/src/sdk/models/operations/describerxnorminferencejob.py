import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describerxnorminferencejobrequest as shared_describerxnorminferencejobrequest
from ..shared import describerxnorminferencejobresponse as shared_describerxnorminferencejobresponse

class DescribeRxNormInferenceJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_DESCRIBE_RX_NORM_INFERENCE_JOB = "ComprehendMedical_20181030.DescribeRxNormInferenceJob"


@dataclasses.dataclass
class DescribeRxNormInferenceJobHeaders:
    x_amz_target: DescribeRxNormInferenceJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRxNormInferenceJobRequest:
    headers: DescribeRxNormInferenceJobHeaders = dataclasses.field()
    request: shared_describerxnorminferencejobrequest.DescribeRxNormInferenceJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeRxNormInferenceJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_rx_norm_inference_job_response: Optional[shared_describerxnorminferencejobresponse.DescribeRxNormInferenceJobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
