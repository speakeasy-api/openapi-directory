import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createportfolioinput as shared_createportfolioinput
from ..shared import createportfoliooutput as shared_createportfoliooutput

class CreatePortfolioXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_CREATE_PORTFOLIO = "AWS242ServiceCatalogService.CreatePortfolio"


@dataclasses.dataclass
class CreatePortfolioHeaders:
    x_amz_target: CreatePortfolioXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePortfolioRequest:
    headers: CreatePortfolioHeaders = dataclasses.field()
    request: shared_createportfolioinput.CreatePortfolioInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_portfolio_output: Optional[shared_createportfoliooutput.CreatePortfolioOutput] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    tag_option_not_migrated_exception: Optional[Any] = dataclasses.field(default=None)
    
