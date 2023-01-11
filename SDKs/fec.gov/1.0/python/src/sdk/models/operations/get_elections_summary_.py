import dataclasses
from typing import Optional
from enum import Enum
from ..shared import electionsummary as shared_electionsummary

class GetElectionsSummaryOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"


@dataclasses.dataclass
class GetElectionsSummaryQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: int = dataclasses.field(metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    office: GetElectionsSummaryOfficeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    district: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetElectionsSummaryRequest:
    query_params: GetElectionsSummaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetElectionsSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    election_summary: Optional[shared_electionsummary.ElectionSummary] = dataclasses.field(default=None)
    
