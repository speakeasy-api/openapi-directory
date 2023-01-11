import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import auditcasepage as shared_auditcasepage


@dataclasses.dataclass
class GetAuditCaseQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    audit_case_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'audit_case_id', 'style': 'form', 'explode': True }})
    audit_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'audit_id', 'style': 'form', 'explode': True }})
    candidate_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_designation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_designation', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    committee_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    max_election_cycle: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_election_cycle', 'style': 'form', 'explode': True }})
    min_election_cycle: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_election_cycle', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    primary_category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'primary_category_id', 'style': 'form', 'explode': True }})
    q: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    qq: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'qq', 'style': 'form', 'explode': True }})
    sort: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    sub_category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sub_category_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuditCaseRequest:
    query_params: GetAuditCaseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuditCaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_case_page: Optional[shared_auditcasepage.AuditCasePage] = dataclasses.field(default=None)
    
