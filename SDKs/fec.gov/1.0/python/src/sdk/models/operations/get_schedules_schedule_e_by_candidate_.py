import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import scheduleebycandidatepage as shared_scheduleebycandidatepage

class GetSchedulesScheduleEByCandidateOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"

class GetSchedulesScheduleEByCandidateSupportOpposeEnum(str, Enum):
    S = "S"
    O = "O"


@dataclasses.dataclass
class GetSchedulesScheduleEByCandidateQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    office: Optional[GetSchedulesScheduleEByCandidateOfficeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    support_oppose: Optional[GetSchedulesScheduleEByCandidateSupportOpposeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'support_oppose', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesScheduleEByCandidateRequest:
    query_params: GetSchedulesScheduleEByCandidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesScheduleEByCandidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_e_by_candidate_page: Optional[shared_scheduleebycandidatepage.ScheduleEByCandidatePage] = dataclasses.field(default=None)
    
