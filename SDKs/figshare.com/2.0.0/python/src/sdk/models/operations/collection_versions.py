import dataclasses
from typing import Optional
from ..shared import collectionversions as shared_collectionversions


@dataclasses.dataclass
class CollectionVersionsPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionVersionsRequest:
    path_params: CollectionVersionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_versions: Optional[list[shared_collectionversions.CollectionVersions]] = dataclasses.field(default=None)
    
