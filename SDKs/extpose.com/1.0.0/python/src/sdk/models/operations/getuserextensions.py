import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import extension as shared_extension


@dataclasses.dataclass
class GetUserExtensionsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetUserExtensionsRequest:
    security: GetUserExtensionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserExtensionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extensions: Optional[list[shared_extension.Extension]] = dataclasses.field(default=None)
    
