import dataclasses
from typing import Optional
from enum import Enum
from ..shared import productfieldvalues_enum as shared_productfieldvalues_enum
from ..shared import productsresult as shared_productsresult


@dataclasses.dataclass
class GetV3ProductsQueryParams:
    fields: Optional[list[shared_productfieldvalues_enum.ProductFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ProductsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ProductsRequest:
    headers: GetV3ProductsHeaders = dataclasses.field()
    query_params: GetV3ProductsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    products_result: Optional[shared_productsresult.ProductsResult] = dataclasses.field(default=None)
    
