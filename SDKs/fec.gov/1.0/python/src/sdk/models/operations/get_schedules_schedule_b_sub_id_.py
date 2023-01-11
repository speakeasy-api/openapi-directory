import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import schedulebpage as shared_schedulebpage


@dataclasses.dataclass
class GetSchedulesScheduleBSubIDPathParams:
    sub_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sub_id', 'style': 'simple', 'explode': False }})
    
class GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"

class GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"

class GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    D = "D"
    E = "E"
    H = "H"
    I = "I"
    N = "N"
    O = "O"
    P = "P"
    Q = "Q"
    S = "S"
    U = "U"
    V = "V"
    W = "W"
    X = "X"
    Y = "Y"
    Z = "Z"


@dataclasses.dataclass
class GetSchedulesScheduleBSubIDQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    disbursement_description: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disbursement_description', 'style': 'form', 'explode': True }})
    disbursement_purpose_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disbursement_purpose_category', 'style': 'form', 'explode': True }})
    image_number: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    last_disbursement_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_disbursement_amount', 'style': 'form', 'explode': True }})
    last_disbursement_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_disbursement_date', 'style': 'form', 'explode': True }})
    last_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_index', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    recipient_city: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recipient_city', 'style': 'form', 'explode': True }})
    recipient_committee_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recipient_committee_id', 'style': 'form', 'explode': True }})
    recipient_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recipient_name', 'style': 'form', 'explode': True }})
    recipient_state: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recipient_state', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    spender_committee_designation: Optional[list[GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_designation', 'style': 'form', 'explode': True }})
    spender_committee_org_type: Optional[list[GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_org_type', 'style': 'form', 'explode': True }})
    spender_committee_type: Optional[list[GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_type', 'style': 'form', 'explode': True }})
    two_year_transaction_period: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'two_year_transaction_period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesScheduleBSubIDRequest:
    path_params: GetSchedulesScheduleBSubIDPathParams = dataclasses.field()
    query_params: GetSchedulesScheduleBSubIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesScheduleBSubIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_b_page: Optional[shared_schedulebpage.ScheduleBPage] = dataclasses.field(default=None)
    
