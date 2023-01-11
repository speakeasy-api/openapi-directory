import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import listingresp as shared_listingresp


@dataclasses.dataclass
class GetListings2Listings2GetQueryParams:
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    brand_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    days_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'daysBack', 'style': 'form', 'explode': True }})
    dealer_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    extended_search: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedSearch', 'style': 'form', 'explode': True }})
    model_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    model_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modelYear', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    zip_code: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListings2Listings2GetRequest:
    query_params: GetListings2Listings2GetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListings2Listings2GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    listing_resp: Optional[shared_listingresp.ListingResp] = dataclasses.field(default=None)
    
