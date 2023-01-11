import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateportfolioinput as shared_updateportfolioinput
from ..shared import updateportfoliooutput as shared_updateportfoliooutput

class UpdatePortfolioXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PORTFOLIO = "AWS242ServiceCatalogService.UpdatePortfolio"


@dataclasses.dataclass
class UpdatePortfolioHeaders:
    x_amz_target: UpdatePortfolioXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePortfolioRequest:
    headers: UpdatePortfolioHeaders = dataclasses.field()
    request: shared_updateportfolioinput.UpdatePortfolioInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    tag_option_not_migrated_exception: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_output: Optional[shared_updateportfoliooutput.UpdatePortfolioOutput] = dataclasses.field(default=None)
    
