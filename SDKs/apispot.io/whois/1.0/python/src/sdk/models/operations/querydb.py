import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class QueryDbQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QueryDbRequest:
    query_params: QueryDbQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class QueryDbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    query_db_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
