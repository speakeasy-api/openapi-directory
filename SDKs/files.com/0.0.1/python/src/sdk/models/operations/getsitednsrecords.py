import dataclasses
from typing import Optional
from ..shared import dnsrecordentity as shared_dnsrecordentity


@dataclasses.dataclass
class GetSiteDNSRecordsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSiteDNSRecordsRequest:
    query_params: GetSiteDNSRecordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSiteDNSRecordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dns_record_entities: Optional[list[shared_dnsrecordentity.DNSRecordEntity]] = dataclasses.field(default=None)
    
