import dataclasses
from typing import Optional
from enum import Enum
from ..shared import clickwrapentity as shared_clickwrapentity


@dataclasses.dataclass
class PatchClickwrapsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchClickwrapsIDRequestBodyUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PatchClickwrapsIDRequestBodyUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PatchClickwrapsIDRequestBodyUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclasses.dataclass
class PatchClickwrapsIDRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    use_with_bundles: Optional[PatchClickwrapsIDRequestBodyUseWithBundlesEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_bundles' }})
    use_with_inboxes: Optional[PatchClickwrapsIDRequestBodyUseWithInboxesEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_inboxes' }})
    use_with_users: Optional[PatchClickwrapsIDRequestBodyUseWithUsersEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_users' }})
    

@dataclasses.dataclass
class PatchClickwrapsIDRequest:
    path_params: PatchClickwrapsIDPathParams = dataclasses.field()
    request: Optional[PatchClickwrapsIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchClickwrapsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clickwrap_entity: Optional[shared_clickwrapentity.ClickwrapEntity] = dataclasses.field(default=None)
    
