import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addcustomfieldsettingrequest as shared_addcustomfieldsettingrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddCustomFieldSettingForPortfolioPathParams:
    portfolio_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForPortfolioQueryParams:
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddCustomFieldSettingForPortfolioRequestBody:
    data: Optional[shared_addcustomfieldsettingrequest.AddCustomFieldSettingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddCustomFieldSettingForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForPortfolioRequest:
    path_params: AddCustomFieldSettingForPortfolioPathParams = dataclasses.field()
    query_params: AddCustomFieldSettingForPortfolioQueryParams = dataclasses.field()
    request: AddCustomFieldSettingForPortfolioRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddCustomFieldSettingForPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_custom_field_setting_for_portfolio_200_application_json_object: Optional[AddCustomFieldSettingForPortfolio200ApplicationJSON] = dataclasses.field(default=None)
    
