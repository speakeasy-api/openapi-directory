import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DatabaseGetDocumentPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DatabaseGetDocumentSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseGetDocumentRequest:
    path_params: DatabaseGetDocumentPathParams = dataclasses.field()
    security: DatabaseGetDocumentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DatabaseGetDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
