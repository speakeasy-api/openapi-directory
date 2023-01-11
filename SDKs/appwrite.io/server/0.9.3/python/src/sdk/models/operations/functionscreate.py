import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import function as shared_function


@dataclass_json
@dataclasses.dataclass
class FunctionsCreateRequestBody:
    execute: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execute') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runtime: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    vars: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    

@dataclasses.dataclass
class FunctionsCreateSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsCreateRequest:
    security: FunctionsCreateSecurity = dataclasses.field()
    request: Optional[FunctionsCreateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FunctionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function: Optional[shared_function.Function] = dataclasses.field(default=None)
    
