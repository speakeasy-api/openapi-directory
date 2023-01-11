import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetApplyPendingMaintenanceActionActionEnum(str, Enum):
    APPLY_PENDING_MAINTENANCE_ACTION = "ApplyPendingMaintenanceAction"

class GetApplyPendingMaintenanceActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetApplyPendingMaintenanceActionQueryParams:
    action: GetApplyPendingMaintenanceActionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_action: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ApplyAction', 'style': 'form', 'explode': True }})
    opt_in_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OptInType', 'style': 'form', 'explode': True }})
    resource_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ResourceIdentifier', 'style': 'form', 'explode': True }})
    version: GetApplyPendingMaintenanceActionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplyPendingMaintenanceActionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplyPendingMaintenanceActionRequest:
    headers: GetApplyPendingMaintenanceActionHeaders = dataclasses.field()
    query_params: GetApplyPendingMaintenanceActionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplyPendingMaintenanceActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
