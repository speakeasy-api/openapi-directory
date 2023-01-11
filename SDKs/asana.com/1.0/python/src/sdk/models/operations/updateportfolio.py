import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliorequest as shared_portfoliorequest
from ..shared import portfolioresponse as shared_portfolioresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdatePortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePortfolioQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePortfolioRequestBodyInput:
    data: Optional[shared_portfoliorequest.PortfolioRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePortfolio200ApplicationJSON:
    data: Optional[shared_portfolioresponse.PortfolioResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdatePortfolioRequest:
    path_params: UpdatePortfolioPathParams = dataclasses.field()
    query_params: UpdatePortfolioQueryParams = dataclasses.field()
    request: UpdatePortfolioRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_portfolio_200_application_json_object: Optional[UpdatePortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
