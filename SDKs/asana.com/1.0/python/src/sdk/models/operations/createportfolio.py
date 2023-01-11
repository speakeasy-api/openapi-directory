import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliorequest as shared_portfoliorequest
from ..shared import portfolioresponse as shared_portfolioresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreatePortfolioQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePortfolioRequestBodyInput:
    data: Optional[shared_portfoliorequest.PortfolioRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePortfolio201ApplicationJSON:
    data: Optional[shared_portfolioresponse.PortfolioResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreatePortfolioRequest:
    query_params: CreatePortfolioQueryParams = dataclasses.field()
    request: CreatePortfolioRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_portfolio_201_application_json_object: Optional[CreatePortfolio201ApplicationJSON] = dataclasses.field(default=None)
    
