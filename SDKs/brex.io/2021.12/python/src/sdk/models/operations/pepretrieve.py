import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class PepRetrievePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PepRetrieveAcceptEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    APPLICATION_PDF = "application/pdf"


@dataclasses.dataclass
class PepRetrieveHeaders:
    accept: Optional[PepRetrieveAcceptEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PepRetrieveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PepRetrieveRequest:
    headers: PepRetrieveHeaders = dataclasses.field()
    path_params: PepRetrievePathParams = dataclasses.field()
    security: PepRetrieveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PepRetrieveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pep_retrieve_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    pep_retrieve_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
