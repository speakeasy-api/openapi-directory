import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetQueryQueryParams:
    one_property: str = dataclasses.field(metadata={'query_param': { 'field_name': '1_property', 'style': 'form', 'explode': True }})
    one_property_value: str = dataclasses.field(metadata={'query_param': { 'field_name': '1_property.value', 'style': 'form', 'explode': True }})
    p_limit: float = dataclasses.field(metadata={'query_param': { 'field_name': 'p.limit', 'style': 'form', 'explode': True }})
    path: str = dataclasses.field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_query_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
