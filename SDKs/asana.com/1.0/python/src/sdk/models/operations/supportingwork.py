import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectcompact as shared_projectcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class SupportingWorkPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SupportingWorkQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SupportingWork200ApplicationJSON:
    data: Optional[list[shared_projectcompact.ProjectCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class SupportingWorkRequest:
    path_params: SupportingWorkPathParams = dataclasses.field()
    query_params: SupportingWorkQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SupportingWorkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    supporting_work_200_application_json_object: Optional[SupportingWork200ApplicationJSON] = dataclasses.field(default=None)
    
