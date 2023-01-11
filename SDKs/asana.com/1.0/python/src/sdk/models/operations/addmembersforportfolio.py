import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addmembersrequest as shared_addmembersrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddMembersForPortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddMembersForPortfolioQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersForPortfolioRequestBody:
    data: Optional[shared_addmembersrequest.AddMembersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddMembersForPortfolioRequest:
    path_params: AddMembersForPortfolioPathParams = dataclasses.field()
    query_params: AddMembersForPortfolioQueryParams = dataclasses.field()
    request: AddMembersForPortfolioRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddMembersForPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_members_for_portfolio_200_application_json_object: Optional[AddMembersForPortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
