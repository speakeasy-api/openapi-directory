import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storyresponse as shared_storyresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetStoryPathParams:
    story_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoryQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetStory200ApplicationJSON:
    data: Optional[shared_storyresponse.StoryResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetStoryRequest:
    path_params: GetStoryPathParams = dataclasses.field()
    query_params: GetStoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_story_200_application_json_object: Optional[GetStory200ApplicationJSON] = dataclasses.field(default=None)
    
