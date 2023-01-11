import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import documentlist as shared_documentlist


@dataclasses.dataclass
class DatabaseListDocumentsPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DatabaseListDocumentsQueryParams:
    filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_cast: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderCast', 'style': 'form', 'explode': True }})
    order_field: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderField', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DatabaseListDocumentsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseListDocumentsRequest:
    path_params: DatabaseListDocumentsPathParams = dataclasses.field()
    query_params: DatabaseListDocumentsQueryParams = dataclasses.field()
    security: DatabaseListDocumentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DatabaseListDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    
