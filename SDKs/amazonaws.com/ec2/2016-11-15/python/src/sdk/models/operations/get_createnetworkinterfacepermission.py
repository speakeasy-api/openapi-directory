import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateNetworkInterfacePermissionActionEnum(str, Enum):
    CREATE_NETWORK_INTERFACE_PERMISSION = "CreateNetworkInterfacePermission"

class GetCreateNetworkInterfacePermissionPermissionEnum(str, Enum):
    INSTANCE_ATTACH = "INSTANCE-ATTACH"
    EIP_ASSOCIATE = "EIP-ASSOCIATE"

class GetCreateNetworkInterfacePermissionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetCreateNetworkInterfacePermissionQueryParams:
    action: GetCreateNetworkInterfacePermissionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    permission: GetCreateNetworkInterfacePermissionPermissionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Permission', 'style': 'form', 'explode': True }})
    version: GetCreateNetworkInterfacePermissionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    aws_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AwsAccountId', 'style': 'form', 'explode': True }})
    aws_service: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AwsService', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateNetworkInterfacePermissionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateNetworkInterfacePermissionRequest:
    headers: GetCreateNetworkInterfacePermissionHeaders = dataclasses.field()
    query_params: GetCreateNetworkInterfacePermissionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateNetworkInterfacePermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
