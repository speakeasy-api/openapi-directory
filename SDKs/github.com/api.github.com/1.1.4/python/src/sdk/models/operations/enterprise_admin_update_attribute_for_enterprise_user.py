import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_user as shared_scim_enterprise_user


@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody:
    operations: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_user: Optional[shared_scim_enterprise_user.ScimEnterpriseUser] = dataclasses.field(default=None)
    
