import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import committeetotalspage as shared_committeetotalspage

class GetTotalsEntityTypeEntityTypeEnum(str, Enum):
    PRESIDENTIAL = "presidential"
    PAC = "pac"
    PARTY = "party"
    PAC_PARTY = "pac-party"
    HOUSE_SENATE = "house-senate"
    IE_ONLY = "ie-only"


@dataclasses.dataclass
class GetTotalsEntityTypePathParams:
    entity_type: GetTotalsEntityTypeEntityTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'entity_type', 'style': 'simple', 'explode': False }})
    
class GetTotalsEntityTypeFilingFrequencyEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    M = "M"
    N = "N"
    Q = "Q"
    T = "T"
    W = "W"
    MINUS_A = "-A"
    MINUS_T = "-T"

class GetTotalsEntityTypeOrganizationTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"


@dataclasses.dataclass
class GetTotalsEntityTypeQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_designation: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_designation', 'style': 'form', 'explode': True }})
    committee_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    committee_state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_state', 'style': 'form', 'explode': True }})
    committee_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    filing_frequency: Optional[list[GetTotalsEntityTypeFilingFrequencyEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filing_frequency', 'style': 'form', 'explode': True }})
    max_disbursements: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_disbursements', 'style': 'form', 'explode': True }})
    max_last_cash_on_hand_end_period: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_last_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    max_last_debts_owed_by_committee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_last_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    max_receipts: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_receipts', 'style': 'form', 'explode': True }})
    min_disbursements: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_disbursements', 'style': 'form', 'explode': True }})
    min_last_cash_on_hand_end_period: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_last_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    min_last_debts_owed_by_committee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_last_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    min_receipts: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_receipts', 'style': 'form', 'explode': True }})
    organization_type: Optional[list[GetTotalsEntityTypeOrganizationTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'organization_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    sponsor_candidate_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sponsor_candidate_id', 'style': 'form', 'explode': True }})
    treasurer_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'treasurer_name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTotalsEntityTypeRequest:
    path_params: GetTotalsEntityTypePathParams = dataclasses.field()
    query_params: GetTotalsEntityTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTotalsEntityTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee_totals_page: Optional[shared_committeetotalspage.CommitteeTotalsPage] = dataclasses.field(default=None)
    
