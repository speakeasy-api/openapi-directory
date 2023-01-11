import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offsetinfo as shared_offsetinfo
from ..shared import electiondate as shared_electiondate

class GetElectionDatesOfficeSoughtEnum(str, Enum):
    H = "H"
    S = "S"
    P = "P"


@dataclasses.dataclass
class GetElectionDatesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    election_district: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_district', 'style': 'form', 'explode': True }})
    election_party: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_party', 'style': 'form', 'explode': True }})
    election_state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_state', 'style': 'form', 'explode': True }})
    election_type_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_type_id', 'style': 'form', 'explode': True }})
    election_year: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    max_create_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_create_date', 'style': 'form', 'explode': True }})
    max_election_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_election_date', 'style': 'form', 'explode': True }})
    max_primary_general_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_primary_general_date', 'style': 'form', 'explode': True }})
    max_update_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_update_date', 'style': 'form', 'explode': True }})
    min_create_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_create_date', 'style': 'form', 'explode': True }})
    min_election_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_election_date', 'style': 'form', 'explode': True }})
    min_primary_general_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_primary_general_date', 'style': 'form', 'explode': True }})
    min_update_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_update_date', 'style': 'form', 'explode': True }})
    office_sought: Optional[list[GetElectionDatesOfficeSoughtEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office_sought', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetElectionDatesDefaultApplicationJSON:
    pagination: Optional[shared_offsetinfo.OffsetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[list[shared_electiondate.ElectionDate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetElectionDatesRequest:
    query_params: GetElectionDatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetElectionDatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_election_dates_default_application_json_object: Optional[GetElectionDatesDefaultApplicationJSON] = dataclasses.field(default=None)
    
