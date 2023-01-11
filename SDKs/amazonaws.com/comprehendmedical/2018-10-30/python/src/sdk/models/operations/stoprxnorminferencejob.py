import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import stoprxnorminferencejobrequest as shared_stoprxnorminferencejobrequest
from ..shared import stoprxnorminferencejobresponse as shared_stoprxnorminferencejobresponse

class StopRxNormInferenceJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_STOP_RX_NORM_INFERENCE_JOB = "ComprehendMedical_20181030.StopRxNormInferenceJob"


@dataclasses.dataclass
class StopRxNormInferenceJobHeaders:
    x_amz_target: StopRxNormInferenceJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopRxNormInferenceJobRequest:
    headers: StopRxNormInferenceJobHeaders = dataclasses.field()
    request: shared_stoprxnorminferencejobrequest.StopRxNormInferenceJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StopRxNormInferenceJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    stop_rx_norm_inference_job_response: Optional[shared_stoprxnorminferencejobresponse.StopRxNormInferenceJobResponse] = dataclasses.field(default=None)
    
