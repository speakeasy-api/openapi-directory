import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import acceptportfolioshareinput as shared_acceptportfolioshareinput

class AcceptPortfolioShareXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE = "AWS242ServiceCatalogService.AcceptPortfolioShare"


@dataclasses.dataclass
class AcceptPortfolioShareHeaders:
    x_amz_target: AcceptPortfolioShareXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcceptPortfolioShareRequest:
    headers: AcceptPortfolioShareHeaders = dataclasses.field()
    request: shared_acceptportfolioshareinput.AcceptPortfolioShareInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcceptPortfolioShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accept_portfolio_share_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
