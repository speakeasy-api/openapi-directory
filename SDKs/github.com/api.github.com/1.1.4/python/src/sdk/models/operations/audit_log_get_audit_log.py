import dataclasses
from typing import Optional
from enum import Enum
from ..shared import audit_log_include_enum as shared_audit_log_include_enum
from ..shared import audit_log_order_enum as shared_audit_log_order_enum
from ..shared import audit_log_event as shared_audit_log_event


@dataclasses.dataclass
class AuditLogGetAuditLogPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AuditLogGetAuditLogQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    include: Optional[shared_audit_log_include_enum.AuditLogIncludeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    order: Optional[shared_audit_log_order_enum.AuditLogOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AuditLogGetAuditLogRequest:
    path_params: AuditLogGetAuditLogPathParams = dataclasses.field()
    query_params: AuditLogGetAuditLogQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AuditLogGetAuditLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_log_events: Optional[list[shared_audit_log_event.AuditLogEvent]] = dataclasses.field(default=None)
    
