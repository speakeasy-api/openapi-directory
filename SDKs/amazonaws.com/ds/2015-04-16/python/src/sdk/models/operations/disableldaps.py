"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import disableldapsrequest as shared_disableldapsrequest
from enum import Enum
from typing import Any, Optional

class DisableLDAPSXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_DISABLE_LDAPS = 'DirectoryService_20150416.DisableLDAPS'


@dataclasses.dataclass
class DisableLDAPSRequest:
    
    disable_ldaps_request: shared_disableldapsrequest.DisableLDAPSRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: DisableLDAPSXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DisableLDAPSResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    client_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ClientException"""  
    directory_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DirectoryDoesNotExistException"""  
    directory_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DirectoryUnavailableException"""  
    disable_ldaps_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    invalid_ldaps_status_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidLDAPSStatusException"""  
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServiceException"""  
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""UnsupportedOperationException"""  
    