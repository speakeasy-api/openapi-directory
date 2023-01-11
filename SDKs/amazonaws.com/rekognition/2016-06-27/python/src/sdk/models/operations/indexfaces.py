import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import indexfacesrequest as shared_indexfacesrequest
from ..shared import indexfacesresponse as shared_indexfacesresponse

class IndexFacesXAmzTargetEnum(str, Enum):
    REKOGNITION_SERVICE_INDEX_FACES = "RekognitionService.IndexFaces"


@dataclasses.dataclass
class IndexFacesHeaders:
    x_amz_target: IndexFacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IndexFacesRequest:
    headers: IndexFacesHeaders = dataclasses.field()
    request: shared_indexfacesrequest.IndexFacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IndexFacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    image_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    index_faces_response: Optional[shared_indexfacesresponse.IndexFacesResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_image_format_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_s3_object_exception: Optional[Any] = dataclasses.field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
