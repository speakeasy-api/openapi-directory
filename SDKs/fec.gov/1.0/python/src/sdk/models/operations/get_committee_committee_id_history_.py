import dataclasses
from typing import Optional
from enum import Enum
from ..shared import committeehistorypage as shared_committeehistorypage


@dataclasses.dataclass
class GetCommitteeCommitteeIDHistoryPathParams:
    committee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    
class GetCommitteeCommitteeIDHistoryDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"


@dataclasses.dataclass
class GetCommitteeCommitteeIDHistoryQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    designation: Optional[list[GetCommitteeCommitteeIDHistoryDesignationEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'designation', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommitteeCommitteeIDHistoryRequest:
    path_params: GetCommitteeCommitteeIDHistoryPathParams = dataclasses.field()
    query_params: GetCommitteeCommitteeIDHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommitteeCommitteeIDHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee_history_page: Optional[shared_committeehistorypage.CommitteeHistoryPage] = dataclasses.field(default=None)
    
