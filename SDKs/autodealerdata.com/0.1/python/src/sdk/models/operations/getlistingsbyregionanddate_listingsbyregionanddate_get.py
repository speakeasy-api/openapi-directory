import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import listingresp as shared_listingresp


@dataclasses.dataclass
class GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams:
    end_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    model_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    region_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    start_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingsByRegionAndDateListingsByRegionAndDateGetRequest:
    query_params: GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingsByRegionAndDateListingsByRegionAndDateGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    listing_resp: Optional[shared_listingresp.ListingResp] = dataclasses.field(default=None)
    
