import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliomembershipcompact as shared_portfoliomembershipcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetPortfolioMembershipsForPortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioMembershipsForPortfolioQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPortfolioMembershipsForPortfolio200ApplicationJSON:
    data: Optional[list[shared_portfoliomembershipcompact.PortfolioMembershipCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetPortfolioMembershipsForPortfolioRequest:
    path_params: GetPortfolioMembershipsForPortfolioPathParams = dataclasses.field()
    query_params: GetPortfolioMembershipsForPortfolioQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioMembershipsForPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_portfolio_memberships_for_portfolio_200_application_json_object: Optional[GetPortfolioMembershipsForPortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
