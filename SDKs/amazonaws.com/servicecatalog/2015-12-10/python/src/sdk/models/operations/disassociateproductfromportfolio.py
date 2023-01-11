import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import disassociateproductfromportfolioinput as shared_disassociateproductfromportfolioinput

class DisassociateProductFromPortfolioXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_PRODUCT_FROM_PORTFOLIO = "AWS242ServiceCatalogService.DisassociateProductFromPortfolio"


@dataclasses.dataclass
class DisassociateProductFromPortfolioHeaders:
    x_amz_target: DisassociateProductFromPortfolioXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisassociateProductFromPortfolioRequest:
    headers: DisassociateProductFromPortfolioHeaders = dataclasses.field()
    request: shared_disassociateproductfromportfolioinput.DisassociateProductFromPortfolioInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisassociateProductFromPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disassociate_product_from_portfolio_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
