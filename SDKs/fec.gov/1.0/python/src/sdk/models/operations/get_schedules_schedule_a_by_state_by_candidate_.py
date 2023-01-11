import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import scheduleabystatecandidatepage as shared_scheduleabystatecandidatepage


@dataclasses.dataclass
class GetSchedulesScheduleAByStateByCandidateQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    cycle: list[int] = dataclasses.field(metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesScheduleAByStateByCandidateRequest:
    query_params: GetSchedulesScheduleAByStateByCandidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesScheduleAByStateByCandidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_a_by_state_candidate_page: Optional[shared_scheduleabystatecandidatepage.ScheduleAByStateCandidatePage] = dataclasses.field(default=None)
    
