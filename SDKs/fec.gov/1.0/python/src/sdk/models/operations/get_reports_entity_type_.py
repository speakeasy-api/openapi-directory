import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import committeereportspage as shared_committeereportspage

class GetReportsEntityTypeEntityTypeEnum(str, Enum):
    PRESIDENTIAL = "presidential"
    PAC_PARTY = "pac-party"
    HOUSE_SENATE = "house-senate"
    IE_ONLY = "ie-only"


@dataclasses.dataclass
class GetReportsEntityTypePathParams:
    entity_type: GetReportsEntityTypeEntityTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'entity_type', 'style': 'simple', 'explode': False }})
    
class GetReportsEntityTypeAmendmentIndicatorEnum(str, Enum):
    UNKNOWN = ""
    N = "N"
    A = "A"
    T = "T"
    C = "C"
    M = "M"
    S = "S"

class GetReportsEntityTypeFilerTypeEnum(str, Enum):
    E_FILE = "e-file"
    PAPER = "paper"


@dataclasses.dataclass
class GetReportsEntityTypeQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    amendment_indicator: Optional[list[GetReportsEntityTypeAmendmentIndicatorEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amendment_indicator', 'style': 'form', 'explode': True }})
    beginning_image_number: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beginning_image_number', 'style': 'form', 'explode': True }})
    candidate_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    filer_type: Optional[GetReportsEntityTypeFilerTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filer_type', 'style': 'form', 'explode': True }})
    is_amended: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_amended', 'style': 'form', 'explode': True }})
    max_cash_on_hand_end_period_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_cash_on_hand_end_period_amount', 'style': 'form', 'explode': True }})
    max_debts_owed_expenditures: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_debts_owed_expenditures', 'style': 'form', 'explode': True }})
    max_disbursements_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_disbursements_amount', 'style': 'form', 'explode': True }})
    max_independent_expenditures: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_independent_expenditures', 'style': 'form', 'explode': True }})
    max_party_coordinated_expenditures: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_party_coordinated_expenditures', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    max_receipts_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_receipts_amount', 'style': 'form', 'explode': True }})
    max_total_contributions: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_total_contributions', 'style': 'form', 'explode': True }})
    min_cash_on_hand_end_period_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_cash_on_hand_end_period_amount', 'style': 'form', 'explode': True }})
    min_debts_owed_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_debts_owed_amount', 'style': 'form', 'explode': True }})
    min_disbursements_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_disbursements_amount', 'style': 'form', 'explode': True }})
    min_independent_expenditures: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_independent_expenditures', 'style': 'form', 'explode': True }})
    min_party_coordinated_expenditures: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_party_coordinated_expenditures', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    min_receipts_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_receipts_amount', 'style': 'form', 'explode': True }})
    min_total_contributions: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_total_contributions', 'style': 'form', 'explode': True }})
    most_recent: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'most_recent', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    report_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    sort: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    year: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsEntityTypeRequest:
    path_params: GetReportsEntityTypePathParams = dataclasses.field()
    query_params: GetReportsEntityTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsEntityTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee_reports_page: Optional[shared_committeereportspage.CommitteeReportsPage] = dataclasses.field(default=None)
    
