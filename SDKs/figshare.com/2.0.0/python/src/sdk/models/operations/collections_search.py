import dataclasses
from typing import Optional
from ..shared import collectionsearch as shared_collectionsearch
from ..shared import collection as shared_collection


@dataclasses.dataclass
class CollectionsSearchRequest:
    request: Optional[shared_collectionsearch.CollectionSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None)
    
