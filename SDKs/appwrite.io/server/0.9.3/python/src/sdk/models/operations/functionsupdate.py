import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import function as shared_function


@dataclasses.dataclass
class FunctionsUpdatePathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class FunctionsUpdateRequestBody:
    execute: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execute') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    vars: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    

@dataclasses.dataclass
class FunctionsUpdateSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsUpdateRequest:
    path_params: FunctionsUpdatePathParams = dataclasses.field()
    security: FunctionsUpdateSecurity = dataclasses.field()
    request: Optional[FunctionsUpdateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FunctionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function: Optional[shared_function.Function] = dataclasses.field(default=None)
    
