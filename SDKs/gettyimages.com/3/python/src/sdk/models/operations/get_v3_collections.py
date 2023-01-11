import dataclasses
from typing import Optional
from ..shared import collectionslist as shared_collectionslist


@dataclasses.dataclass
class GetV3CollectionsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3CollectionsRequest:
    headers: GetV3CollectionsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetV3CollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections_list: Optional[shared_collectionslist.CollectionsList] = dataclasses.field(default=None)
    
