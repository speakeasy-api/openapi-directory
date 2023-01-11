import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeportfoliosharesinput as shared_describeportfoliosharesinput
from ..shared import describeportfoliosharesoutput as shared_describeportfoliosharesoutput


@dataclasses.dataclass
class DescribePortfolioSharesQueryParams:
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class DescribePortfolioSharesXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARES = "AWS242ServiceCatalogService.DescribePortfolioShares"


@dataclasses.dataclass
class DescribePortfolioSharesHeaders:
    x_amz_target: DescribePortfolioSharesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribePortfolioSharesRequest:
    headers: DescribePortfolioSharesHeaders = dataclasses.field()
    query_params: DescribePortfolioSharesQueryParams = dataclasses.field()
    request: shared_describeportfoliosharesinput.DescribePortfolioSharesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribePortfolioSharesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_portfolio_shares_output: Optional[shared_describeportfoliosharesoutput.DescribePortfolioSharesOutput] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
