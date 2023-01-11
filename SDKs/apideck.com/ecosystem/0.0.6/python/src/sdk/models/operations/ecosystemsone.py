import dataclasses
from typing import Optional
from ..shared import getecosystemresponse as shared_getecosystemresponse


@dataclasses.dataclass
class EcosystemsOnePathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EcosystemsOneRequest:
    path_params: EcosystemsOnePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EcosystemsOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ecosystem_response: Optional[shared_getecosystemresponse.GetEcosystemResponse] = dataclasses.field(default=None)
    
