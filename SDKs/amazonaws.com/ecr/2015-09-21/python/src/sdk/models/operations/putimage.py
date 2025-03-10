"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import putimagerequest as shared_putimagerequest
from ..shared import putimageresponse as shared_putimageresponse
from enum import Enum
from typing import Any, Optional

class PutImageXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE = 'AmazonEC2ContainerRegistry_V20150921.PutImage'


@dataclasses.dataclass
class PutImageRequest:
    
    put_image_request: shared_putimagerequest.PutImageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: PutImageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class PutImageResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    image_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ImageAlreadyExistsException"""  
    image_digest_does_not_match_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ImageDigestDoesNotMatchException"""  
    image_tag_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ImageTagAlreadyExistsException"""  
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterException"""  
    kms_exception: Optional[Any] = dataclasses.field(default=None)
    r"""KmsException"""  
    layers_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""LayersNotFoundException"""  
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""LimitExceededException"""  
    put_image_response: Optional[shared_putimageresponse.PutImageResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    referenced_images_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ReferencedImagesNotFoundException"""  
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""RepositoryNotFoundException"""  
    server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServerException"""  
    