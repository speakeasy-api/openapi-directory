import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSetSecurityTokenServicePreferencesActionEnum(str, Enum):
    SET_SECURITY_TOKEN_SERVICE_PREFERENCES = "SetSecurityTokenServicePreferences"

class GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum(str, Enum):
    V1_TOKEN = "v1Token"
    V2_TOKEN = "v2Token"

class GetSetSecurityTokenServicePreferencesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetSetSecurityTokenServicePreferencesQueryParams:
    action: GetSetSecurityTokenServicePreferencesActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_endpoint_token_version: GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'GlobalEndpointTokenVersion', 'style': 'form', 'explode': True }})
    version: GetSetSecurityTokenServicePreferencesVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetSecurityTokenServicePreferencesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetSecurityTokenServicePreferencesRequest:
    headers: GetSetSecurityTokenServicePreferencesHeaders = dataclasses.field()
    query_params: GetSetSecurityTokenServicePreferencesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetSecurityTokenServicePreferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
