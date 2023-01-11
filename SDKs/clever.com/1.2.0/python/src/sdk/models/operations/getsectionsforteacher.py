import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import sectionsresponse as shared_sectionsresponse


@dataclasses.dataclass
class GetSectionsForTeacherPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSectionsForTeacherQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSectionsForTeacherRequest:
    path_params: GetSectionsForTeacherPathParams = dataclasses.field()
    query_params: GetSectionsForTeacherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSectionsForTeacherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    sections_response: Optional[shared_sectionsresponse.SectionsResponse] = dataclasses.field(default=None)
    
