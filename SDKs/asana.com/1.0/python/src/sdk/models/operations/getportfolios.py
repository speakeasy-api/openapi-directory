import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliocompact as shared_portfoliocompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetPortfoliosQueryParams:
    owner: str = dataclasses.field(metadata={'query_param': { 'field_name': 'owner', 'style': 'form', 'explode': True }})
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPortfolios200ApplicationJSON:
    data: Optional[list[shared_portfoliocompact.PortfolioCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetPortfoliosRequest:
    query_params: GetPortfoliosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfoliosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_portfolios_200_application_json_object: Optional[GetPortfolios200ApplicationJSON] = dataclasses.field(default=None)
    
