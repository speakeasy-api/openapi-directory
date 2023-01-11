import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import function as shared_function


@dataclasses.dataclass
class FunctionsUpdateTagPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class FunctionsUpdateTagRequestBody:
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclasses.dataclass
class FunctionsUpdateTagSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsUpdateTagRequest:
    path_params: FunctionsUpdateTagPathParams = dataclasses.field()
    security: FunctionsUpdateTagSecurity = dataclasses.field()
    request: Optional[FunctionsUpdateTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FunctionsUpdateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function: Optional[shared_function.Function] = dataclasses.field(default=None)
    
