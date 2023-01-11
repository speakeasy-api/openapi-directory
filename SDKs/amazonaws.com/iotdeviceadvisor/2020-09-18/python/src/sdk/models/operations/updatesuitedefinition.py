import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceundertest as shared_deviceundertest
from ..shared import updatesuitedefinitionresponse as shared_updatesuitedefinitionresponse


@dataclasses.dataclass
class UpdateSuiteDefinitionPathParams:
    suite_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'suiteDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSuiteDefinitionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration:
    r"""UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
    Gets Suite Definition Configuration.
    """
    
    device_permission_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePermissionRoleArn') }})
    devices: Optional[list[shared_deviceundertest.DeviceUnderTest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    intended_for_qualification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedForQualification') }})
    root_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootGroup') }})
    suite_definition_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionName') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSuiteDefinitionRequestBody:
    suite_definition_configuration: Optional[UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionConfiguration') }})
    

@dataclasses.dataclass
class UpdateSuiteDefinitionRequest:
    headers: UpdateSuiteDefinitionHeaders = dataclasses.field()
    path_params: UpdateSuiteDefinitionPathParams = dataclasses.field()
    request: UpdateSuiteDefinitionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSuiteDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    update_suite_definition_response: Optional[shared_updatesuitedefinitionresponse.UpdateSuiteDefinitionResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
