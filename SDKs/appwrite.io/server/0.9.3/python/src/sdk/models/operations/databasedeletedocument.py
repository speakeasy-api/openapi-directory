import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DatabaseDeleteDocumentPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DatabaseDeleteDocumentSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseDeleteDocumentRequest:
    path_params: DatabaseDeleteDocumentPathParams = dataclasses.field()
    security: DatabaseDeleteDocumentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DatabaseDeleteDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
