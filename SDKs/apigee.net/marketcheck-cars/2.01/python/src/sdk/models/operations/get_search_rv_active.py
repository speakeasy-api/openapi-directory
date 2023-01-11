import dataclasses
from typing import Optional
from enum import Enum
from ..shared import facet_sort_enum as shared_facet_sort_enum
from ..shared import inventory_type_enum as shared_inventory_type_enum
from ..shared import sort_order_enum as shared_sort_order_enum
from ..shared import error as shared_error
from ..shared import rvsearchresponse as shared_rvsearchresponse


@dataclasses.dataclass
class GetSearchRvActiveQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    class_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'class', 'style': 'form', 'explode': True }})
    dealer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_id', 'style': 'form', 'explode': True }})
    dealer_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_name', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    exterior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exterior_color', 'style': 'form', 'explode': True }})
    facet_sort: Optional[shared_facet_sort_enum.FacetSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_sort', 'style': 'form', 'explode': True }})
    facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    first_seen_days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_seen_days', 'style': 'form', 'explode': True }})
    first_seen_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_seen_range', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    interior_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interior_color', 'style': 'form', 'explode': True }})
    inventory_type: Optional[shared_inventory_type_enum.InventoryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inventory_type', 'style': 'form', 'explode': True }})
    last_seen_days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_seen_days', 'style': 'form', 'explode': True }})
    last_seen_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_seen_range', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    miles_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'miles_range', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    model_o: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model_o', 'style': 'form', 'explode': True }})
    msa_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msa_code', 'style': 'form', 'explode': True }})
    msrp_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msrp_range', 'style': 'form', 'explode': True }})
    price_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'price_range', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    range_facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'range_facets', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_text', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sort_order_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    stats: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stats', 'style': 'form', 'explode': True }})
    stock_no: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stock_no', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchRvActiveRequest:
    query_params: GetSearchRvActiveQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchRvActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rv_search_response: Optional[shared_rvsearchresponse.RvSearchResponse] = dataclasses.field(default=None)
    
