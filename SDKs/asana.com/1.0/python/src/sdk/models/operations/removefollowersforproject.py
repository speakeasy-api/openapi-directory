import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import removefollowersrequest as shared_removefollowersrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveFollowersForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveFollowersForProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowersForProjectRequestBody:
    data: Optional[shared_removefollowersrequest.RemoveFollowersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowersForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveFollowersForProjectRequest:
    path_params: RemoveFollowersForProjectPathParams = dataclasses.field()
    query_params: RemoveFollowersForProjectQueryParams = dataclasses.field()
    request: RemoveFollowersForProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveFollowersForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_followers_for_project_200_application_json_object: Optional[RemoveFollowersForProject200ApplicationJSON] = dataclasses.field(default=None)
    
