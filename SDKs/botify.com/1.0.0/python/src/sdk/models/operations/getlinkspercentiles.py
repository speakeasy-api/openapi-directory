import dataclasses
from typing import Optional
from ..shared import defaultpayload as shared_defaultpayload
from ..shared import linkspercentiles as shared_linkspercentiles


@dataclasses.dataclass
class GetLinksPercentilesPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLinksPercentilesRequest:
    path_params: GetLinksPercentilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLinksPercentilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    links_percentiles: Optional[shared_linkspercentiles.LinksPercentiles] = dataclasses.field(default=None)
    
