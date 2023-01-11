import dataclasses
from typing import Optional
from ..shared import schedulebbypurposepage as shared_schedulebbypurposepage


@dataclasses.dataclass
class GetSchedulesScheduleBByPurposeQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    purpose: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'purpose', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesScheduleBByPurposeRequest:
    query_params: GetSchedulesScheduleBByPurposeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesScheduleBByPurposeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_b_by_purpose_page: Optional[shared_schedulebbypurposepage.ScheduleBByPurposePage] = dataclasses.field(default=None)
    
