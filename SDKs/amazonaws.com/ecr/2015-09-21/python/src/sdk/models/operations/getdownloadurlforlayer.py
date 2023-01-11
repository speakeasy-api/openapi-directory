import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdownloadurlforlayerrequest as shared_getdownloadurlforlayerrequest
from ..shared import getdownloadurlforlayerresponse as shared_getdownloadurlforlayerresponse

class GetDownloadURLForLayerXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_DOWNLOAD_URL_FOR_LAYER = "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer"


@dataclasses.dataclass
class GetDownloadURLForLayerHeaders:
    x_amz_target: GetDownloadURLForLayerXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDownloadURLForLayerRequest:
    headers: GetDownloadURLForLayerHeaders = dataclasses.field()
    request: shared_getdownloadurlforlayerrequest.GetDownloadURLForLayerRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDownloadURLForLayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_download_url_for_layer_response: Optional[shared_getdownloadurlforlayerresponse.GetDownloadURLForLayerResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    layer_inaccessible_exception: Optional[Any] = dataclasses.field(default=None)
    layers_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
