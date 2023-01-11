import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeentitiesdetectionv2jobrequest as shared_describeentitiesdetectionv2jobrequest
from ..shared import describeentitiesdetectionv2jobresponse as shared_describeentitiesdetectionv2jobresponse

class DescribeEntitiesDetectionV2JobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"


@dataclasses.dataclass
class DescribeEntitiesDetectionV2JobHeaders:
    x_amz_target: DescribeEntitiesDetectionV2JobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeEntitiesDetectionV2JobRequest:
    headers: DescribeEntitiesDetectionV2JobHeaders = dataclasses.field()
    request: shared_describeentitiesdetectionv2jobrequest.DescribeEntitiesDetectionV2JobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeEntitiesDetectionV2JobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_entities_detection_v2_job_response: Optional[shared_describeentitiesdetectionv2jobresponse.DescribeEntitiesDetectionV2JobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
