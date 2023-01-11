import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAemHealthCheckQueryParams:
    combine_tags_or: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'combineTagsOr', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAemHealthCheckRequest:
    query_params: GetAemHealthCheckQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAemHealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aem_health_check_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
