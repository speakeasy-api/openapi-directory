import dataclasses
from typing import Optional
from ..shared import entityreceiptdisbursementtotalspage as shared_entityreceiptdisbursementtotalspage


@dataclasses.dataclass
class GetTotalsByEntityQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: int = dataclasses.field(metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTotalsByEntityRequest:
    query_params: GetTotalsByEntityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTotalsByEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_receipt_disbursement_totals_page: Optional[shared_entityreceiptdisbursementtotalspage.EntityReceiptDisbursementTotalsPage] = dataclasses.field(default=None)
    
