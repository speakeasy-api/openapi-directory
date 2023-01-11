import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import scim_error as shared_scim_error
from ..shared import scim_user as shared_scim_user


@dataclasses.dataclass
class ScimUpdateAttributeForUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    
class ScimUpdateAttributeForUserRequestBodyOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclasses.dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue1:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue2:
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUpdateAttributeForUserRequestBodyOperations:
    op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimUpdateAttributeForUserRequestBody:
    operations: list[ScimUpdateAttributeForUserRequestBodyOperations] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclasses.dataclass
class ScimUpdateAttributeForUserRequest:
    path_params: ScimUpdateAttributeForUserPathParams = dataclasses.field()
    request: Optional[ScimUpdateAttributeForUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScimUpdateAttributeForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    scim_user: Optional[shared_scim_user.ScimUser] = dataclasses.field(default=None)
    
