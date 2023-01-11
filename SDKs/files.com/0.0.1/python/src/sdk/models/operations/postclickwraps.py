import dataclasses
from typing import Optional
from enum import Enum
from ..shared import clickwrapentity as shared_clickwrapentity

class PostClickwrapsRequestBodyUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PostClickwrapsRequestBodyUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PostClickwrapsRequestBodyUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclasses.dataclass
class PostClickwrapsRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    use_with_bundles: Optional[PostClickwrapsRequestBodyUseWithBundlesEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_bundles' }})
    use_with_inboxes: Optional[PostClickwrapsRequestBodyUseWithInboxesEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_inboxes' }})
    use_with_users: Optional[PostClickwrapsRequestBodyUseWithUsersEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_users' }})
    

@dataclasses.dataclass
class PostClickwrapsRequest:
    request: Optional[PostClickwrapsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostClickwrapsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clickwrap_entity: Optional[shared_clickwrapentity.ClickwrapEntity] = dataclasses.field(default=None)
    
