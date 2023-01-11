import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagrequest as shared_tagrequest
from ..shared import tagresponse as shared_tagresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateTagQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTagRequestBodyInput:
    data: Optional[shared_tagrequest.TagRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTag201ApplicationJSON:
    data: Optional[shared_tagresponse.TagResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateTagRequest:
    query_params: CreateTagQueryParams = dataclasses.field()
    request: CreateTagRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_tag_201_application_json_object: Optional[CreateTag201ApplicationJSON] = dataclasses.field(default=None)
    
