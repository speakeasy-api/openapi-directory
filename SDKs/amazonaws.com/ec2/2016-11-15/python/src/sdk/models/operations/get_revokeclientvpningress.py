import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRevokeClientVpnIngressActionEnum(str, Enum):
    REVOKE_CLIENT_VPN_INGRESS = "RevokeClientVpnIngress"

class GetRevokeClientVpnIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetRevokeClientVpnIngressQueryParams:
    action: GetRevokeClientVpnIngressActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    target_network_cidr: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TargetNetworkCidr', 'style': 'form', 'explode': True }})
    version: GetRevokeClientVpnIngressVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    access_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AccessGroupId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    revoke_all_groups: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RevokeAllGroups', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevokeClientVpnIngressHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevokeClientVpnIngressRequest:
    headers: GetRevokeClientVpnIngressHeaders = dataclasses.field()
    query_params: GetRevokeClientVpnIngressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevokeClientVpnIngressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
