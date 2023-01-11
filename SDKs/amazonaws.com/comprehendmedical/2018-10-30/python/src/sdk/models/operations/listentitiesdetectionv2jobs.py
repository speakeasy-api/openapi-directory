import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listentitiesdetectionv2jobsrequest as shared_listentitiesdetectionv2jobsrequest
from ..shared import listentitiesdetectionv2jobsresponse as shared_listentitiesdetectionv2jobsresponse

class ListEntitiesDetectionV2JobsXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_LIST_ENTITIES_DETECTION_V2_JOBS = "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"


@dataclasses.dataclass
class ListEntitiesDetectionV2JobsHeaders:
    x_amz_target: ListEntitiesDetectionV2JobsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListEntitiesDetectionV2JobsRequest:
    headers: ListEntitiesDetectionV2JobsHeaders = dataclasses.field()
    request: shared_listentitiesdetectionv2jobsrequest.ListEntitiesDetectionV2JobsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListEntitiesDetectionV2JobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_entities_detection_v2_jobs_response: Optional[shared_listentitiesdetectionv2jobsresponse.ListEntitiesDetectionV2JobsResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
