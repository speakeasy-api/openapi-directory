import dataclasses
from typing import Optional
from ..shared import apikeyentity as shared_apikeyentity


@dataclasses.dataclass
class APIKeyFindCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_entity: Optional[shared_apikeyentity.APIKeyEntity] = dataclasses.field(default=None)
    
