import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyAvailabilityZoneGroupActionEnum(str, Enum):
    MODIFY_AVAILABILITY_ZONE_GROUP = "ModifyAvailabilityZoneGroup"

class GetModifyAvailabilityZoneGroupOptInStatusEnum(str, Enum):
    OPTED_IN = "opted-in"
    NOT_OPTED_IN = "not-opted-in"

class GetModifyAvailabilityZoneGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyAvailabilityZoneGroupQueryParams:
    action: GetModifyAvailabilityZoneGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'GroupName', 'style': 'form', 'explode': True }})
    opt_in_status: GetModifyAvailabilityZoneGroupOptInStatusEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'OptInStatus', 'style': 'form', 'explode': True }})
    version: GetModifyAvailabilityZoneGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyAvailabilityZoneGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyAvailabilityZoneGroupRequest:
    headers: GetModifyAvailabilityZoneGroupHeaders = dataclasses.field()
    query_params: GetModifyAvailabilityZoneGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyAvailabilityZoneGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
