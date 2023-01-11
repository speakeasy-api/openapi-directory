import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class UsersUpdatePrefsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UsersUpdatePrefsRequestBody:
    prefs: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefs') }})
    

@dataclasses.dataclass
class UsersUpdatePrefsSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsersUpdatePrefsRequest:
    path_params: UsersUpdatePrefsPathParams = dataclasses.field()
    security: UsersUpdatePrefsSecurity = dataclasses.field()
    request: Optional[UsersUpdatePrefsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsersUpdatePrefsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preferences: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
