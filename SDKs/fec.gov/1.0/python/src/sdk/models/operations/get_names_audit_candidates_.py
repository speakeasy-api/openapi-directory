import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import auditcandidatesearchlist as shared_auditcandidatesearchlist


@dataclasses.dataclass
class GetNamesAuditCandidatesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesAuditCandidatesRequest:
    query_params: GetNamesAuditCandidatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesAuditCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_candidate_search_list: Optional[shared_auditcandidatesearchlist.AuditCandidateSearchList] = dataclasses.field(default=None)
    
