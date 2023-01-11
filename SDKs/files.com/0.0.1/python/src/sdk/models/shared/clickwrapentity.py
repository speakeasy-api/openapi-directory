import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClickwrapEntityUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class ClickwrapEntityUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class ClickwrapEntityUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclass_json
@dataclasses.dataclass
class ClickwrapEntity:
    r"""ClickwrapEntity
    Create Clickwrap
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    use_with_bundles: Optional[ClickwrapEntityUseWithBundlesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_bundles') }})
    use_with_inboxes: Optional[ClickwrapEntityUseWithInboxesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_inboxes') }})
    use_with_users: Optional[ClickwrapEntityUseWithUsersEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_users') }})
    
