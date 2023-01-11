import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storyrequest as shared_storyrequest
from ..shared import storyresponse as shared_storyresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateStoryForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateStoryForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateStoryForTaskRequestBodyInput:
    data: Optional[shared_storyrequest.StoryRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateStoryForTask201ApplicationJSON:
    data: Optional[shared_storyresponse.StoryResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateStoryForTaskRequest:
    path_params: CreateStoryForTaskPathParams = dataclasses.field()
    query_params: CreateStoryForTaskQueryParams = dataclasses.field()
    request: CreateStoryForTaskRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateStoryForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_story_for_task_201_application_json_object: Optional[CreateStoryForTask201ApplicationJSON] = dataclasses.field(default=None)
    
