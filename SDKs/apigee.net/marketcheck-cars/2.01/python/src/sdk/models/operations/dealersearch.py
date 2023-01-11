import dataclasses
from typing import Optional
from enum import Enum
from ..shared import non_default_country_enum as shared_non_default_country_enum
from ..shared import dealer_type_enum as shared_dealer_type_enum
from ..shared import sort_order_enum as shared_sort_order_enum
from ..shared import dealersresponse as shared_dealersresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class DealerSearchQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[shared_non_default_country_enum.NonDefaultCountryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    dealer_type: Optional[shared_dealer_type_enum.DealerTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealer_type', 'style': 'form', 'explode': True }})
    facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    inventory_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inventory_url', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    listing_count_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listing_count_range', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    provider: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    range_facets: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'range_facets', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sort_order_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DealerSearchRequest:
    query_params: DealerSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DealerSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dealers_response: Optional[shared_dealersresponse.DealersResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
