import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import genericresponse as shared_genericresponse
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetDealerSalesRegionDailySalesGetQueryParams:
    brand_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    day: date = dataclasses.field(metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    jwt: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealerSalesRegionDailySalesGetRequest:
    query_params: GetDealerSalesRegionDailySalesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDealerSalesRegionDailySalesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generic_response: Optional[shared_genericresponse.GenericResponse] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
