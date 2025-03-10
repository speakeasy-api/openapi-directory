"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Optional

class GETDeleteCustomDBEngineVersionActionEnum(str, Enum):
    DELETE_CUSTOM_DB_ENGINE_VERSION = 'DeleteCustomDBEngineVersion'

class GETDeleteCustomDBEngineVersionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = '2014-10-31'


@dataclasses.dataclass
class GETDeleteCustomDBEngineVersionRequest:
    
    action: GETDeleteCustomDBEngineVersionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})  
    engine: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    r"""The database engine. The only supported engine is <code>custom-oracle-ee</code>."""  
    engine_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    r"""The custom engine version (CEV) for your DB instance. This option is required for RDS Custom, but optional for Amazon RDS. The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Amazon Web Services Region."""  
    version: GETDeleteCustomDBEngineVersionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GETDeleteCustomDBEngineVersionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    