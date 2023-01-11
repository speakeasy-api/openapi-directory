import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAssociateVpcCidrBlockActionEnum(str, Enum):
    ASSOCIATE_VPC_CIDR_BLOCK = "AssociateVpcCidrBlock"

class GetAssociateVpcCidrBlockVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetAssociateVpcCidrBlockQueryParams:
    action: GetAssociateVpcCidrBlockActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetAssociateVpcCidrBlockVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    amazon_provided_ipv6_cidr_block: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AmazonProvidedIpv6CidrBlock', 'style': 'form', 'explode': True }})
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CidrBlock', 'style': 'form', 'explode': True }})
    ipv6_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlock', 'style': 'form', 'explode': True }})
    ipv6_cidr_block_network_border_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlockNetworkBorderGroup', 'style': 'form', 'explode': True }})
    ipv6_pool: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Pool', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociateVpcCidrBlockHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociateVpcCidrBlockRequest:
    headers: GetAssociateVpcCidrBlockHeaders = dataclasses.field()
    query_params: GetAssociateVpcCidrBlockQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociateVpcCidrBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
