import dataclasses
from typing import Optional
from ..shared import collectioncomplete as shared_collectioncomplete


@dataclasses.dataclass
class CollectionDetailsPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionDetailsRequest:
    path_params: CollectionDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_complete: Optional[shared_collectioncomplete.CollectionComplete] = dataclasses.field(default=None)
    
