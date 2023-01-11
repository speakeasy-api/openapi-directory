import dataclasses
from typing import Optional
from ..shared import collectioncomplete as shared_collectioncomplete


@dataclasses.dataclass
class CollectionVersionDetailsPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    version_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionVersionDetailsRequest:
    path_params: CollectionVersionDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionVersionDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_complete: Optional[shared_collectioncomplete.CollectionComplete] = dataclasses.field(default=None)
    
