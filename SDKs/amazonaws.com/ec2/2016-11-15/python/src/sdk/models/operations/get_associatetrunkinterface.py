import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAssociateTrunkInterfaceActionEnum(str, Enum):
    ASSOCIATE_TRUNK_INTERFACE = "AssociateTrunkInterface"

class GetAssociateTrunkInterfaceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetAssociateTrunkInterfaceQueryParams:
    action: GetAssociateTrunkInterfaceActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    branch_interface_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'BranchInterfaceId', 'style': 'form', 'explode': True }})
    trunk_interface_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TrunkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetAssociateTrunkInterfaceVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    gre_key: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GreKey', 'style': 'form', 'explode': True }})
    vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VlanId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociateTrunkInterfaceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociateTrunkInterfaceRequest:
    headers: GetAssociateTrunkInterfaceHeaders = dataclasses.field()
    query_params: GetAssociateTrunkInterfaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociateTrunkInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
