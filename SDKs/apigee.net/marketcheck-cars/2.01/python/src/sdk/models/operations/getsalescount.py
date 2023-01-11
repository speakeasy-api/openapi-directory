import dataclasses
from typing import Optional
from enum import Enum
from ..shared import api_key_enum as shared_api_key_enum
from ..shared import api_key_enum1 as shared_api_key_enum1
from ..shared import error as shared_error
from ..shared import sales as shared_sales


@dataclasses.dataclass
class GetSalesCountQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    car_type: Optional[shared_api_key_enum.APIKeyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[shared_api_key_enum1.APIKeyEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    mm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mm', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    taxonomy_vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxonomy_vin', 'style': 'form', 'explode': True }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    ymm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ymm', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSalesCountRequest:
    query_params: GetSalesCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSalesCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    sales: Optional[shared_sales.Sales] = dataclasses.field(default=None)
    
