import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRevokeDbSecurityGroupIngressActionEnum(str, Enum):
    REVOKE_DB_SECURITY_GROUP_INGRESS = "RevokeDBSecurityGroupIngress"

class GetRevokeDbSecurityGroupIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_09_09 = "2013-09-09"


@dataclasses.dataclass
class GetRevokeDbSecurityGroupIngressQueryParams:
    action: GetRevokeDbSecurityGroupIngressActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_security_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DBSecurityGroupName', 'style': 'form', 'explode': True }})
    version: GetRevokeDbSecurityGroupIngressVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cidrip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CIDRIP', 'style': 'form', 'explode': True }})
    ec2_security_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupId', 'style': 'form', 'explode': True }})
    ec2_security_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_owner_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupOwnerId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevokeDbSecurityGroupIngressHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevokeDbSecurityGroupIngressRequest:
    headers: GetRevokeDbSecurityGroupIngressHeaders = dataclasses.field()
    query_params: GetRevokeDbSecurityGroupIngressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevokeDbSecurityGroupIngressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
