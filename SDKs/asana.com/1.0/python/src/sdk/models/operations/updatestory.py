import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storyrequest as shared_storyrequest
from ..shared import storyresponse as shared_storyresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateStoryPathParams:
    story_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateStoryQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateStoryRequestBodyInput:
    data: Optional[shared_storyrequest.StoryRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateStory200ApplicationJSON:
    data: Optional[shared_storyresponse.StoryResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdateStoryRequest:
    path_params: UpdateStoryPathParams = dataclasses.field()
    query_params: UpdateStoryQueryParams = dataclasses.field()
    request: UpdateStoryRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateStoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_story_200_application_json_object: Optional[UpdateStory200ApplicationJSON] = dataclasses.field(default=None)
    
