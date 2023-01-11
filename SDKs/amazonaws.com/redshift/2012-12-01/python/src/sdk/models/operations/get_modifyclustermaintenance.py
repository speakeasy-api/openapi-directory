import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyClusterMaintenanceActionEnum(str, Enum):
    MODIFY_CLUSTER_MAINTENANCE = "ModifyClusterMaintenance"

class GetModifyClusterMaintenanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetModifyClusterMaintenanceQueryParams:
    action: GetModifyClusterMaintenanceActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyClusterMaintenanceVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    defer_maintenance: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenance', 'style': 'form', 'explode': True }})
    defer_maintenance_duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceDuration', 'style': 'form', 'explode': True }})
    defer_maintenance_end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceEndTime', 'style': 'form', 'explode': True }})
    defer_maintenance_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceIdentifier', 'style': 'form', 'explode': True }})
    defer_maintenance_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceStartTime', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyClusterMaintenanceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyClusterMaintenanceRequest:
    headers: GetModifyClusterMaintenanceHeaders = dataclasses.field()
    query_params: GetModifyClusterMaintenanceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyClusterMaintenanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
