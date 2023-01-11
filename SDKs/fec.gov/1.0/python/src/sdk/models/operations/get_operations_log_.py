import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import operationslogpage as shared_operationslogpage
from ..operations import operationslogpage as operations_operationslogpage

class GetOperationsLogStatusNumEnum(str, Enum):
    ZERO = "0"
    ONE = "1"


@dataclasses.dataclass
class GetOperationsLogQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    amendment_indicator: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amendment_indicator', 'style': 'form', 'explode': True }})
    beginning_image_number: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beginning_image_number', 'style': 'form', 'explode': True }})
    candidate_committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_committee_id', 'style': 'form', 'explode': True }})
    form_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'form_type', 'style': 'form', 'explode': True }})
    max_coverage_end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_coverage_end_date', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    max_transaction_data_complete_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_transaction_data_complete_date', 'style': 'form', 'explode': True }})
    min_coverage_end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_coverage_end_date', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    min_transaction_data_complete_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_transaction_data_complete_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    report_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    report_year: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report_year', 'style': 'form', 'explode': True }})
    sort: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    status_num: Optional[list[GetOperationsLogStatusNumEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status_num', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOperationsLogRequest:
    query_params: GetOperationsLogQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOperationsLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operations_log_page: Optional[shared_operationslogpage.OperationsLogPage] = dataclasses.field(default=None)
    
