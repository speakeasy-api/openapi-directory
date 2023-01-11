import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfolioremoveitemrequest as shared_portfolioremoveitemrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveItemForPortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveItemForPortfolioQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveItemForPortfolioRequestBody:
    data: Optional[shared_portfolioremoveitemrequest.PortfolioRemoveItemRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveItemForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveItemForPortfolioRequest:
    path_params: RemoveItemForPortfolioPathParams = dataclasses.field()
    query_params: RemoveItemForPortfolioQueryParams = dataclasses.field()
    request: RemoveItemForPortfolioRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveItemForPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_item_for_portfolio_200_application_json_object: Optional[RemoveItemForPortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
