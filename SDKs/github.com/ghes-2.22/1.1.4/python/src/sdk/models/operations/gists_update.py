import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import gist_simple as shared_gist_simple
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GistsUpdatePathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GistsUpdateRequestBodyFiles:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    

@dataclass_json
@dataclasses.dataclass
class GistsUpdateRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    files: Optional[dict[str, GistsUpdateRequestBodyFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    

@dataclasses.dataclass
class GistsUpdateRequest:
    path_params: GistsUpdatePathParams = dataclasses.field()
    request: Optional[GistsUpdateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GistsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_simple: Optional[shared_gist_simple.GistSimple] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
