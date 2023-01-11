import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeportfoliosharestatusinput as shared_describeportfoliosharestatusinput
from ..shared import describeportfoliosharestatusoutput as shared_describeportfoliosharestatusoutput

class DescribePortfolioShareStatusXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARE_STATUS = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"


@dataclasses.dataclass
class DescribePortfolioShareStatusHeaders:
    x_amz_target: DescribePortfolioShareStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribePortfolioShareStatusRequest:
    headers: DescribePortfolioShareStatusHeaders = dataclasses.field()
    request: shared_describeportfoliosharestatusinput.DescribePortfolioShareStatusInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribePortfolioShareStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_portfolio_share_status_output: Optional[shared_describeportfoliosharestatusoutput.DescribePortfolioShareStatusOutput] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
