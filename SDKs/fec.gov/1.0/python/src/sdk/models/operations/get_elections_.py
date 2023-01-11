import dataclasses
from typing import Optional
from enum import Enum
from ..shared import electionpage as shared_electionpage

class GetElectionsOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"


@dataclasses.dataclass
class GetElectionsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: int = dataclasses.field(metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    office: GetElectionsOfficeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    district: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetElectionsRequest:
    query_params: GetElectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetElectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    election_page: Optional[shared_electionpage.ElectionPage] = dataclasses.field(default=None)
    
