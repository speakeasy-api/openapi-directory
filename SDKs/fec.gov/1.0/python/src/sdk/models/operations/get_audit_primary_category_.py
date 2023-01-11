import dataclasses
from typing import Optional
from ..shared import auditprimarycategorypage as shared_auditprimarycategorypage


@dataclasses.dataclass
class GetAuditPrimaryCategoryQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    primary_category_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'primary_category_id', 'style': 'form', 'explode': True }})
    primary_category_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'primary_category_name', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuditPrimaryCategoryRequest:
    query_params: GetAuditPrimaryCategoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuditPrimaryCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_primary_category_page: Optional[shared_auditprimarycategorypage.AuditPrimaryCategoryPage] = dataclasses.field(default=None)
    
