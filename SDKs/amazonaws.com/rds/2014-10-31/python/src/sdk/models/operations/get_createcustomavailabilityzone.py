import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateCustomAvailabilityZoneActionEnum(str, Enum):
    CREATE_CUSTOM_AVAILABILITY_ZONE = "CreateCustomAvailabilityZone"

class GetCreateCustomAvailabilityZoneVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetCreateCustomAvailabilityZoneQueryParams:
    action: GetCreateCustomAvailabilityZoneActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_availability_zone_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'CustomAvailabilityZoneName', 'style': 'form', 'explode': True }})
    version: GetCreateCustomAvailabilityZoneVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    existing_vpn_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExistingVpnId', 'style': 'form', 'explode': True }})
    new_vpn_tunnel_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NewVpnTunnelName', 'style': 'form', 'explode': True }})
    vpn_tunnel_originator_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VpnTunnelOriginatorIP', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateCustomAvailabilityZoneHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateCustomAvailabilityZoneRequest:
    headers: GetCreateCustomAvailabilityZoneHeaders = dataclasses.field()
    query_params: GetCreateCustomAvailabilityZoneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateCustomAvailabilityZoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
