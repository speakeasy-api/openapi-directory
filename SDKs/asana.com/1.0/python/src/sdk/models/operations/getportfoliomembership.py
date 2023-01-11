import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliomembershipresponse as shared_portfoliomembershipresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetPortfolioMembershipPathParams:
    portfolio_membership_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioMembershipQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPortfolioMembership200ApplicationJSON:
    data: Optional[shared_portfoliomembershipresponse.PortfolioMembershipResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetPortfolioMembershipRequest:
    path_params: GetPortfolioMembershipPathParams = dataclasses.field()
    query_params: GetPortfolioMembershipQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioMembershipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_portfolio_membership_200_application_json_object: Optional[GetPortfolioMembership200ApplicationJSON] = dataclasses.field(default=None)
    
