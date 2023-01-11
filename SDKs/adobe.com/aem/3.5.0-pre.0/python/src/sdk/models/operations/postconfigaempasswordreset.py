import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigAemPasswordResetQueryParams:
    pwdreset_authorizables: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pwdreset.authorizables', 'style': 'form', 'explode': True }})
    pwdreset_authorizables_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pwdreset.authorizables@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigAemPasswordResetRequest:
    query_params: PostConfigAemPasswordResetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigAemPasswordResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
