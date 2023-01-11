import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfolioresponse as shared_portfolioresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetPortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPortfolio200ApplicationJSON:
    data: Optional[shared_portfolioresponse.PortfolioResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetPortfolioRequest:
    path_params: GetPortfolioPathParams = dataclasses.field()
    query_params: GetPortfolioQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_portfolio_200_application_json_object: Optional[GetPortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
