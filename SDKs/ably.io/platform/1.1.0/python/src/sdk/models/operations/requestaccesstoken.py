import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import tokenrequest as shared_tokenrequest
from ..shared import signedtokenrequest as shared_signedtokenrequest
from ..shared import error as shared_error
from ..shared import tokendetails as shared_tokendetails


@dataclasses.dataclass
class RequestAccessTokenPathParams:
    key_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'keyName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RequestAccessTokenQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RequestAccessTokenHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RequestAccessTokenRequest:
    headers: RequestAccessTokenHeaders = dataclasses.field()
    path_params: RequestAccessTokenPathParams = dataclasses.field()
    query_params: RequestAccessTokenQueryParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RequestAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    token_details: Optional[shared_tokendetails.TokenDetails] = dataclasses.field(default=None)
    
