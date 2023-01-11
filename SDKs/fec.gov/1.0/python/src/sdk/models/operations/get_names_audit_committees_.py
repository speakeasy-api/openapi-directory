import dataclasses
from typing import Optional
from ..shared import auditcommitteesearchlist as shared_auditcommitteesearchlist


@dataclasses.dataclass
class GetNamesAuditCommitteesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesAuditCommitteesRequest:
    query_params: GetNamesAuditCommitteesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesAuditCommitteesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_committee_search_list: Optional[shared_auditcommitteesearchlist.AuditCommitteeSearchList] = dataclasses.field(default=None)
    
