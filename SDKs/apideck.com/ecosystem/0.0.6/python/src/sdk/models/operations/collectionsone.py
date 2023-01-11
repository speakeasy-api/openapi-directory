import dataclasses
from typing import Optional
from ..shared import getcollectionresponse as shared_getcollectionresponse


@dataclasses.dataclass
class CollectionsOnePathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsOneRequest:
    path_params: CollectionsOnePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_collection_response: Optional[shared_getcollectionresponse.GetCollectionResponse] = dataclasses.field(default=None)
    
