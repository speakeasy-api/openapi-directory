import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteVpnConnectionRouteActionEnum(str, Enum):
    DELETE_VPN_CONNECTION_ROUTE = "DeleteVpnConnectionRoute"

class GetDeleteVpnConnectionRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetDeleteVpnConnectionRouteQueryParams:
    action: GetDeleteVpnConnectionRouteActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    destination_cidr_block: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    version: GetDeleteVpnConnectionRouteVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpn_connection_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'VpnConnectionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteVpnConnectionRouteHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeleteVpnConnectionRouteRequest:
    headers: GetDeleteVpnConnectionRouteHeaders = dataclasses.field()
    query_params: GetDeleteVpnConnectionRouteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteVpnConnectionRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
