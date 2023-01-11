import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRemoveClientIDFromOpenIDConnectProviderActionEnum(str, Enum):
    REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER = "RemoveClientIDFromOpenIDConnectProvider"

class GetRemoveClientIDFromOpenIDConnectProviderVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetRemoveClientIDFromOpenIDConnectProviderQueryParams:
    action: GetRemoveClientIDFromOpenIDConnectProviderActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    open_id_connect_provider_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OpenIDConnectProviderArn', 'style': 'form', 'explode': True }})
    version: GetRemoveClientIDFromOpenIDConnectProviderVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoveClientIDFromOpenIDConnectProviderHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRemoveClientIDFromOpenIDConnectProviderRequest:
    headers: GetRemoveClientIDFromOpenIDConnectProviderHeaders = dataclasses.field()
    query_params: GetRemoveClientIDFromOpenIDConnectProviderQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoveClientIDFromOpenIDConnectProviderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
