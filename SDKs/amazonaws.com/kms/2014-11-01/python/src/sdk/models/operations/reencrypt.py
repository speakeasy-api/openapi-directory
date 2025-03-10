"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import reencryptrequest as shared_reencryptrequest
from ..shared import reencryptresponse as shared_reencryptresponse
from enum import Enum
from typing import Any, Optional

class ReEncryptXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_RE_ENCRYPT = 'TrentService.ReEncrypt'


@dataclasses.dataclass
class ReEncryptRequest:
    
    re_encrypt_request: shared_reencryptrequest.ReEncryptRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: ReEncryptXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ReEncryptResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    dependency_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DependencyTimeoutException"""  
    disabled_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DisabledException"""  
    incorrect_key_exception: Optional[Any] = dataclasses.field(default=None)
    r"""IncorrectKeyException"""  
    invalid_ciphertext_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidCiphertextException"""  
    invalid_grant_token_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidGrantTokenException"""  
    invalid_key_usage_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidKeyUsageException"""  
    key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    r"""KeyUnavailableException"""  
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    r"""KMSInternalException"""  
    kms_invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    r"""KMSInvalidStateException"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    re_encrypt_response: Optional[shared_reencryptresponse.ReEncryptResponse] = dataclasses.field(default=None)
    r"""Success"""  
    