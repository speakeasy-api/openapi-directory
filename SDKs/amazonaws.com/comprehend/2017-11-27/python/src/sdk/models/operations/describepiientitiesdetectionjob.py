import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describepiientitiesdetectionjobrequest as shared_describepiientitiesdetectionjobrequest
from ..shared import describepiientitiesdetectionjobresponse as shared_describepiientitiesdetectionjobresponse

class DescribePiiEntitiesDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"


@dataclasses.dataclass
class DescribePiiEntitiesDetectionJobHeaders:
    x_amz_target: DescribePiiEntitiesDetectionJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribePiiEntitiesDetectionJobRequest:
    headers: DescribePiiEntitiesDetectionJobHeaders = dataclasses.field()
    request: shared_describepiientitiesdetectionjobrequest.DescribePiiEntitiesDetectionJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribePiiEntitiesDetectionJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_pii_entities_detection_job_response: Optional[shared_describepiientitiesdetectionjobresponse.DescribePiiEntitiesDetectionJobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
