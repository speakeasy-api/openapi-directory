import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAuthorizeCacheSecurityGroupIngressActionEnum(str, Enum):
    AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS = "AuthorizeCacheSecurityGroupIngress"

class GetAuthorizeCacheSecurityGroupIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetAuthorizeCacheSecurityGroupIngressQueryParams:
    action: GetAuthorizeCacheSecurityGroupIngressActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_security_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'CacheSecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EC2SecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_owner_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EC2SecurityGroupOwnerId', 'style': 'form', 'explode': True }})
    version: GetAuthorizeCacheSecurityGroupIngressVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuthorizeCacheSecurityGroupIngressHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAuthorizeCacheSecurityGroupIngressRequest:
    headers: GetAuthorizeCacheSecurityGroupIngressHeaders = dataclasses.field()
    query_params: GetAuthorizeCacheSecurityGroupIngressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorizeCacheSecurityGroupIngressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
