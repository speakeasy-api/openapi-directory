import dataclasses
from typing import Optional
from enum import Enum
from ..shared import country_enum as shared_country_enum
from ..shared import facet_sort_enum as shared_facet_sort_enum
from ..shared import api_key_enum3 as shared_api_key_enum3
from ..shared import sort_order_enum as shared_sort_order_enum
from ..shared import error as shared_error
from ..shared import searchresponse as shared_searchresponse


@dataclasses.dataclass
class GetSearchCarIncentiveOemQueryParams:
    acquisition_fee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'acquisition_fee', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    apr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apr', 'style': 'form', 'explode': True }})
    cashback_amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cashback_amount', 'style': 'form', 'explode': True }})
    cashback_target_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cashback_target_group', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[shared_country_enum.CountryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    dealer_contribution: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_contribution', 'style': 'form', 'explode': True }})
    disposition_fee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disposition_fee', 'style': 'form', 'explode': True }})
    down_payment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'down_payment', 'style': 'form', 'explode': True }})
    due_at_signing: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_signing', 'style': 'form', 'explode': True }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    facet_sort: Optional[shared_facet_sort_enum.FacetSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_sort', 'style': 'form', 'explode': True }})
    facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    first_seen_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_seen_range', 'style': 'form', 'explode': True }})
    gross_capitalised_cost: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gross_capitalised_cost', 'style': 'form', 'explode': True }})
    last_seen_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_seen_range', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    lease_end_purchase_option: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lease_end_purchase_option', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    mileage_charge: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mileage_charge', 'style': 'form', 'explode': True }})
    mileage_charge_limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mileage_charge_limit', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    monthly: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'monthly', 'style': 'form', 'explode': True }})
    monthly_per_thousand: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'monthly_per_thousand', 'style': 'form', 'explode': True }})
    msrp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msrp', 'style': 'form', 'explode': True }})
    net_capitalised_cost: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'net_capitalised_cost', 'style': 'form', 'explode': True }})
    offer_type: Optional[shared_api_key_enum3.APIKeyEnum3] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offer_type', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    range_facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'range_facets', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_text', 'style': 'form', 'explode': True }})
    security_deposit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'security_deposit', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sort_order_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    stats: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stats', 'style': 'form', 'explode': True }})
    total_monthly_payment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'total_monthly_payment', 'style': 'form', 'explode': True }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchCarIncentiveOemRequest:
    query_params: GetSearchCarIncentiveOemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchCarIncentiveOemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    search_response: Optional[shared_searchresponse.SearchResponse] = dataclasses.field(default=None)
    
