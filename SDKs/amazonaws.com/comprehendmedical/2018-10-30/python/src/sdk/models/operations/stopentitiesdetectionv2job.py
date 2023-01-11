import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import stopentitiesdetectionv2jobrequest as shared_stopentitiesdetectionv2jobrequest
from ..shared import stopentitiesdetectionv2jobresponse as shared_stopentitiesdetectionv2jobresponse

class StopEntitiesDetectionV2JobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_STOP_ENTITIES_DETECTION_V2_JOB = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"


@dataclasses.dataclass
class StopEntitiesDetectionV2JobHeaders:
    x_amz_target: StopEntitiesDetectionV2JobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopEntitiesDetectionV2JobRequest:
    headers: StopEntitiesDetectionV2JobHeaders = dataclasses.field()
    request: shared_stopentitiesdetectionv2jobrequest.StopEntitiesDetectionV2JobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StopEntitiesDetectionV2JobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    stop_entities_detection_v2_job_response: Optional[shared_stopentitiesdetectionv2jobresponse.StopEntitiesDetectionV2JobResponse] = dataclasses.field(default=None)
    
