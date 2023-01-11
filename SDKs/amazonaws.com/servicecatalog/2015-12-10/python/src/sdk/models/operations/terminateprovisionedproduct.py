import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import terminateprovisionedproductinput as shared_terminateprovisionedproductinput
from ..shared import terminateprovisionedproductoutput as shared_terminateprovisionedproductoutput

class TerminateProvisionedProductXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_TERMINATE_PROVISIONED_PRODUCT = "AWS242ServiceCatalogService.TerminateProvisionedProduct"


@dataclasses.dataclass
class TerminateProvisionedProductHeaders:
    x_amz_target: TerminateProvisionedProductXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TerminateProvisionedProductRequest:
    headers: TerminateProvisionedProductHeaders = dataclasses.field()
    request: shared_terminateprovisionedproductinput.TerminateProvisionedProductInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TerminateProvisionedProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    terminate_provisioned_product_output: Optional[shared_terminateprovisionedproductoutput.TerminateProvisionedProductOutput] = dataclasses.field(default=None)
    
