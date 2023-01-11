import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigAemHealthCheckServletQueryParams:
    bundles_ignored: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundles.ignored', 'style': 'form', 'explode': True }})
    bundles_ignored_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundles.ignored@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigAemHealthCheckServletRequest:
    query_params: PostConfigAemHealthCheckServletQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigAemHealthCheckServletResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
