import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetItemUsagesSecurity:
    jwtsa: shared_security.SchemeJwtsa = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetItemUsagesRequest:
    security: GetItemUsagesSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetItemUsagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_item_usages_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
