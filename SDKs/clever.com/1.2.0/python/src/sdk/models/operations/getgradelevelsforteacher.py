import dataclasses
from typing import Optional
from ..shared import gradelevelsresponse as shared_gradelevelsresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetGradeLevelsForTeacherPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGradeLevelsForTeacherRequest:
    path_params: GetGradeLevelsForTeacherPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGradeLevelsForTeacherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    grade_levels_response: Optional[shared_gradelevelsresponse.GradeLevelsResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
