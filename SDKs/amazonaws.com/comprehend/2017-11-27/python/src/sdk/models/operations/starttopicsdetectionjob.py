import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import starttopicsdetectionjobrequest as shared_starttopicsdetectionjobrequest
from ..shared import starttopicsdetectionjobresponse as shared_starttopicsdetectionjobresponse

class StartTopicsDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_START_TOPICS_DETECTION_JOB = "Comprehend_20171127.StartTopicsDetectionJob"


@dataclasses.dataclass
class StartTopicsDetectionJobHeaders:
    x_amz_target: StartTopicsDetectionJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartTopicsDetectionJobRequest:
    headers: StartTopicsDetectionJobHeaders = dataclasses.field()
    request: shared_starttopicsdetectionjobrequest.StartTopicsDetectionJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartTopicsDetectionJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    kms_key_validation_exception: Optional[Any] = dataclasses.field(default=None)
    start_topics_detection_job_response: Optional[shared_starttopicsdetectionjobresponse.StartTopicsDetectionJobResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_tags_exception: Optional[Any] = dataclasses.field(default=None)
    
