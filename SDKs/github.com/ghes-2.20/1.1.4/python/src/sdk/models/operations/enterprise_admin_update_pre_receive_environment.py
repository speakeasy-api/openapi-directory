import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pre_receive_environment as shared_pre_receive_environment


@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody:
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON:
    errors: Optional[list[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_update_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON] = dataclasses.field(default=None)
    pre_receive_environment: Optional[shared_pre_receive_environment.PreReceiveEnvironment] = dataclasses.field(default=None)
    
