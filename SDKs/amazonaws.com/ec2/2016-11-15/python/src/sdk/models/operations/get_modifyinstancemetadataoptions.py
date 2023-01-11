import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyInstanceMetadataOptionsActionEnum(str, Enum):
    MODIFY_INSTANCE_METADATA_OPTIONS = "ModifyInstanceMetadataOptions"

class GetModifyInstanceMetadataOptionsHTTPEndpointEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

class GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

class GetModifyInstanceMetadataOptionsHTTPTokensEnum(str, Enum):
    OPTIONAL = "optional"
    REQUIRED = "required"

class GetModifyInstanceMetadataOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyInstanceMetadataOptionsQueryParams:
    action: GetModifyInstanceMetadataOptionsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetModifyInstanceMetadataOptionsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    http_endpoint: Optional[GetModifyInstanceMetadataOptionsHTTPEndpointEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HttpEndpoint', 'style': 'form', 'explode': True }})
    http_protocol_ipv6: Optional[GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HttpProtocolIpv6', 'style': 'form', 'explode': True }})
    http_put_response_hop_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HttpPutResponseHopLimit', 'style': 'form', 'explode': True }})
    http_tokens: Optional[GetModifyInstanceMetadataOptionsHTTPTokensEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HttpTokens', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyInstanceMetadataOptionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyInstanceMetadataOptionsRequest:
    headers: GetModifyInstanceMetadataOptionsHeaders = dataclasses.field()
    query_params: GetModifyInstanceMetadataOptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyInstanceMetadataOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
