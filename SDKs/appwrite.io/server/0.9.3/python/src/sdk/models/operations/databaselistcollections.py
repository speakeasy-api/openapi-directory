import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collectionlist as shared_collectionlist


@dataclasses.dataclass
class DatabaseListCollectionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DatabaseListCollectionsSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseListCollectionsRequest:
    query_params: DatabaseListCollectionsQueryParams = dataclasses.field()
    security: DatabaseListCollectionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DatabaseListCollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_list: Optional[shared_collectionlist.CollectionList] = dataclasses.field(default=None)
    
