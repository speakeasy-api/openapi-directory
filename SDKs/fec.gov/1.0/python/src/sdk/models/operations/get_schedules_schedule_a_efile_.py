import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import scheduleaefilepage as shared_scheduleaefilepage


@dataclasses.dataclass
class GetSchedulesScheduleAEfileQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    contributor_city: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_city', 'style': 'form', 'explode': True }})
    contributor_employer: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_employer', 'style': 'form', 'explode': True }})
    contributor_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_name', 'style': 'form', 'explode': True }})
    contributor_occupation: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_occupation', 'style': 'form', 'explode': True }})
    contributor_state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_state', 'style': 'form', 'explode': True }})
    image_number: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesScheduleAEfileRequest:
    query_params: GetSchedulesScheduleAEfileQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesScheduleAEfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_a_efile_page: Optional[shared_scheduleaefilepage.ScheduleAEfilePage] = dataclasses.field(default=None)
    
