import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectsavedfilter as shared_projectsavedfilter
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetSavedFiltersPathParams:
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSavedFiltersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSavedFilters200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    results: Optional[list[shared_projectsavedfilter.ProjectSavedFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclasses.dataclass
class GetSavedFiltersRequest:
    path_params: GetSavedFiltersPathParams = dataclasses.field()
    query_params: GetSavedFiltersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSavedFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_saved_filters_200_application_json_object: Optional[GetSavedFilters200ApplicationJSON] = dataclasses.field(default=None)
    
