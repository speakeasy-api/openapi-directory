import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import radanalystpage as shared_radanalystpage


@dataclasses.dataclass
class GetRadAnalystQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    analyst_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analyst_id', 'style': 'form', 'explode': True }})
    analyst_short_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analyst_short_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    email: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    max_assignment_update_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_assignment_update_date', 'style': 'form', 'explode': True }})
    min_assignment_update_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_assignment_update_date', 'style': 'form', 'explode': True }})
    name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    telephone_ext: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'telephone_ext', 'style': 'form', 'explode': True }})
    title: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRadAnalystRequest:
    query_params: GetRadAnalystQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRadAnalystResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rad_analyst_page: Optional[shared_radanalystpage.RadAnalystPage] = dataclasses.field(default=None)
    
