import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminUpdateOrgNamePathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateOrgNameRequestBody:
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateOrgName202ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateOrgNameRequest:
    path_params: EnterpriseAdminUpdateOrgNamePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateOrgNameRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateOrgNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_update_org_name_202_application_json_object: Optional[EnterpriseAdminUpdateOrgName202ApplicationJSON] = dataclasses.field(default=None)
    
