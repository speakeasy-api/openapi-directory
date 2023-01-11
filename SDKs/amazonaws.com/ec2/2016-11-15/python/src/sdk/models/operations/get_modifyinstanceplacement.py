import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyInstancePlacementActionEnum(str, Enum):
    MODIFY_INSTANCE_PLACEMENT = "ModifyInstancePlacement"

class GetModifyInstancePlacementAffinityEnum(str, Enum):
    DEFAULT = "default"
    HOST = "host"

class GetModifyInstancePlacementTenancyEnum(str, Enum):
    DEDICATED = "dedicated"
    HOST = "host"

class GetModifyInstancePlacementVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyInstancePlacementQueryParams:
    action: GetModifyInstancePlacementActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetModifyInstancePlacementVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    affinity: Optional[GetModifyInstancePlacementAffinityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Affinity', 'style': 'form', 'explode': True }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GroupName', 'style': 'form', 'explode': True }})
    host_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HostId', 'style': 'form', 'explode': True }})
    host_resource_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HostResourceGroupArn', 'style': 'form', 'explode': True }})
    partition_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PartitionNumber', 'style': 'form', 'explode': True }})
    tenancy: Optional[GetModifyInstancePlacementTenancyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Tenancy', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyInstancePlacementHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyInstancePlacementRequest:
    headers: GetModifyInstancePlacementHeaders = dataclasses.field()
    query_params: GetModifyInstancePlacementQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyInstancePlacementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
