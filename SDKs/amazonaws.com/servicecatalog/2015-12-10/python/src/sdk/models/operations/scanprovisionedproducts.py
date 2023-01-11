import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import scanprovisionedproductsinput as shared_scanprovisionedproductsinput
from ..shared import scanprovisionedproductsoutput as shared_scanprovisionedproductsoutput

class ScanProvisionedProductsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_SCAN_PROVISIONED_PRODUCTS = "AWS242ServiceCatalogService.ScanProvisionedProducts"


@dataclasses.dataclass
class ScanProvisionedProductsHeaders:
    x_amz_target: ScanProvisionedProductsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScanProvisionedProductsRequest:
    headers: ScanProvisionedProductsHeaders = dataclasses.field()
    request: shared_scanprovisionedproductsinput.ScanProvisionedProductsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScanProvisionedProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    scan_provisioned_products_output: Optional[shared_scanprovisionedproductsoutput.ScanProvisionedProductsOutput] = dataclasses.field(default=None)
    
