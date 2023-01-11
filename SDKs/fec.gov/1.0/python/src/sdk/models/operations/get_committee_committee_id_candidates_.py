import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import candidatedetailpage as shared_candidatedetailpage


@dataclasses.dataclass
class GetCommitteeCommitteeIDCandidatesPathParams:
    committee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    
class GetCommitteeCommitteeIDCandidatesCandidateStatusEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    F = "F"
    N = "N"
    P = "P"

class GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum(str, Enum):
    UNKNOWN = ""
    I = "I"
    C = "C"
    O = "O"

class GetCommitteeCommitteeIDCandidatesOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclasses.dataclass
class GetCommitteeCommitteeIDCandidatesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_status: Optional[list[GetCommitteeCommitteeIDCandidatesCandidateStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_status', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_year: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    federal_funds_flag: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'federal_funds_flag', 'style': 'form', 'explode': True }})
    has_raised_funds: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'has_raised_funds', 'style': 'form', 'explode': True }})
    incumbent_challenge: Optional[list[GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'incumbent_challenge', 'style': 'form', 'explode': True }})
    name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    office: Optional[list[GetCommitteeCommitteeIDCandidatesOfficeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommitteeCommitteeIDCandidatesRequest:
    path_params: GetCommitteeCommitteeIDCandidatesPathParams = dataclasses.field()
    query_params: GetCommitteeCommitteeIDCandidatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommitteeCommitteeIDCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    candidate_detail_page: Optional[shared_candidatedetailpage.CandidateDetailPage] = dataclasses.field(default=None)
    
