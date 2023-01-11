import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DatabaseDeleteCollectionPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DatabaseDeleteCollectionSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DatabaseDeleteCollectionRequest:
    path_params: DatabaseDeleteCollectionPathParams = dataclasses.field()
    security: DatabaseDeleteCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DatabaseDeleteCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
