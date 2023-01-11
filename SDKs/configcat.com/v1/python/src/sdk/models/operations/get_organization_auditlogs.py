import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import auditlogitemmodel as shared_auditlogitemmodel


@dataclasses.dataclass
class GetOrganizationAuditlogsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAuditlogsQueryParams:
    audit_log_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auditLogType', 'style': 'form', 'explode': True }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'configId', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'environmentId', 'style': 'form', 'explode': True }})
    from_utc_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromUtcDateTime', 'style': 'form', 'explode': True }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'productId', 'style': 'form', 'explode': True }})
    to_utc_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toUtcDateTime', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationAuditlogsRequest:
    path_params: GetOrganizationAuditlogsPathParams = dataclasses.field()
    query_params: GetOrganizationAuditlogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAuditlogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_log_item_models: Optional[list[shared_auditlogitemmodel.AuditLogItemModel]] = dataclasses.field(default=None)
    
