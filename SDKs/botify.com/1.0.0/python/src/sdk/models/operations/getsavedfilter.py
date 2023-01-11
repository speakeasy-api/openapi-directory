import dataclasses
from typing import Optional
from ..shared import defaultpayload as shared_defaultpayload
from ..shared import projectsavedfilter as shared_projectsavedfilter


@dataclasses.dataclass
class GetSavedFilterPathParams:
    identifier: str = dataclasses.field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSavedFilterRequest:
    path_params: GetSavedFilterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSavedFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    project_saved_filter: Optional[shared_projectsavedfilter.ProjectSavedFilter] = dataclasses.field(default=None)
    
