import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import searchprovisionedproductsinput as shared_searchprovisionedproductsinput
from ..shared import searchprovisionedproductsoutput as shared_searchprovisionedproductsoutput


@dataclasses.dataclass
class SearchProvisionedProductsQueryParams:
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class SearchProvisionedProductsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PROVISIONED_PRODUCTS = "AWS242ServiceCatalogService.SearchProvisionedProducts"


@dataclasses.dataclass
class SearchProvisionedProductsHeaders:
    x_amz_target: SearchProvisionedProductsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchProvisionedProductsRequest:
    headers: SearchProvisionedProductsHeaders = dataclasses.field()
    query_params: SearchProvisionedProductsQueryParams = dataclasses.field()
    request: shared_searchprovisionedproductsinput.SearchProvisionedProductsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SearchProvisionedProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    search_provisioned_products_output: Optional[shared_searchprovisionedproductsoutput.SearchProvisionedProductsOutput] = dataclasses.field(default=None)
    
