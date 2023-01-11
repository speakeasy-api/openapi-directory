import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import auditlogitemmodel as shared_auditlogitemmodel


@dataclasses.dataclass
class GetAuditlogsPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAuditlogsQueryParams:
    audit_log_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auditLogType', 'style': 'form', 'explode': True }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'configId', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'environmentId', 'style': 'form', 'explode': True }})
    from_utc_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromUtcDateTime', 'style': 'form', 'explode': True }})
    to_utc_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toUtcDateTime', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuditlogsRequest:
    path_params: GetAuditlogsPathParams = dataclasses.field()
    query_params: GetAuditlogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuditlogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_log_item_models: Optional[list[shared_auditlogitemmodel.AuditLogItemModel]] = dataclasses.field(default=None)
    
