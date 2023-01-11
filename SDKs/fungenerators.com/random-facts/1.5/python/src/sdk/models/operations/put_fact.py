import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PutFactQueryParams:
    category: str = dataclasses.field(metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    fact: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fact', 'style': 'form', 'explode': True }})
    subcategory: str = dataclasses.field(metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    tags: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutFactSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutFactRequest:
    query_params: PutFactQueryParams = dataclasses.field()
    security: PutFactSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutFactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
