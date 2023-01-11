import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import presidentialbycandidatepage as shared_presidentialbycandidatepage


@dataclasses.dataclass
class GetPresidentialContributionsByCandidateQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    contributor_state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_state', 'style': 'form', 'explode': True }})
    election_year: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPresidentialContributionsByCandidateRequest:
    query_params: GetPresidentialContributionsByCandidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPresidentialContributionsByCandidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presidential_by_candidate_page: Optional[shared_presidentialbycandidatepage.PresidentialByCandidatePage] = dataclasses.field(default=None)
    
