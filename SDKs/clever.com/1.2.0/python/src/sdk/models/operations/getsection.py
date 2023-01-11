import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import sectionresponse as shared_sectionresponse


@dataclasses.dataclass
class GetSectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSectionRequest:
    path_params: GetSectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    section_response: Optional[shared_sectionresponse.SectionResponse] = dataclasses.field(default=None)
    
