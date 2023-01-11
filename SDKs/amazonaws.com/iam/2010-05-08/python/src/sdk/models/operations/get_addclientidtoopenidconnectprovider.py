import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAddClientIDToOpenIDConnectProviderActionEnum(str, Enum):
    ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER = "AddClientIDToOpenIDConnectProvider"

class GetAddClientIDToOpenIDConnectProviderVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetAddClientIDToOpenIDConnectProviderQueryParams:
    action: GetAddClientIDToOpenIDConnectProviderActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    open_id_connect_provider_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OpenIDConnectProviderArn', 'style': 'form', 'explode': True }})
    version: GetAddClientIDToOpenIDConnectProviderVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAddClientIDToOpenIDConnectProviderHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddClientIDToOpenIDConnectProviderRequest:
    headers: GetAddClientIDToOpenIDConnectProviderHeaders = dataclasses.field()
    query_params: GetAddClientIDToOpenIDConnectProviderQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddClientIDToOpenIDConnectProviderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
