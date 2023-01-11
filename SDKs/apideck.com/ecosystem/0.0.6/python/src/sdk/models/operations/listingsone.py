import dataclasses
from typing import Optional
from ..shared import getlistingresponse as shared_getlistingresponse


@dataclasses.dataclass
class ListingsOnePathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListingsOneRequest:
    path_params: ListingsOnePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListingsOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_listing_response: Optional[shared_getlistingresponse.GetListingResponse] = dataclasses.field(default=None)
    
