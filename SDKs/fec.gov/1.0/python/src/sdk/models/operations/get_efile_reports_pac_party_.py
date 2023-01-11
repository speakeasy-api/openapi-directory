import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import basef3xfilingpage as shared_basef3xfilingpage


@dataclasses.dataclass
class GetEfileReportsPacPartyQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    file_number: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_number', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEfileReportsPacPartyRequest:
    query_params: GetEfileReportsPacPartyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEfileReportsPacPartyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    base_f3_x_filing_page: Optional[shared_basef3xfilingpage.BaseF3XFilingPage] = dataclasses.field(default=None)
    
