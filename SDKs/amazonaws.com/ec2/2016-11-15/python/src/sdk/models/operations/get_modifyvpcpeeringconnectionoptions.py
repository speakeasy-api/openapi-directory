import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions:
    r"""GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions
    The VPC peering connection options.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowDnsResolutionFromRemoteVpc' }})
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalClassicLinkToRemoteVpc' }})
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalVpcToRemoteClassicLink' }})
    
class GetModifyVpcPeeringConnectionOptionsActionEnum(str, Enum):
    MODIFY_VPC_PEERING_CONNECTION_OPTIONS = "ModifyVpcPeeringConnectionOptions"


@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions:
    r"""GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions
    The VPC peering connection options.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowDnsResolutionFromRemoteVpc' }})
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalClassicLinkToRemoteVpc' }})
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalVpcToRemoteClassicLink' }})
    
class GetModifyVpcPeeringConnectionOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsQueryParams:
    action: GetModifyVpcPeeringConnectionOptionsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetModifyVpcPeeringConnectionOptionsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_peering_connection_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'VpcPeeringConnectionId', 'style': 'form', 'explode': True }})
    accepter_peering_connection_options: Optional[GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AccepterPeeringConnectionOptions', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    requester_peering_connection_options: Optional[GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequesterPeeringConnectionOptions', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsRequest:
    headers: GetModifyVpcPeeringConnectionOptionsHeaders = dataclasses.field()
    query_params: GetModifyVpcPeeringConnectionOptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyVpcPeeringConnectionOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
