import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link_with_type as shared_link_with_type


@dataclass_json
@dataclasses.dataclass
class FeedLinks:
    timeline: shared_link_with_type.LinkWithType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline') }})
    user: shared_link_with_type.LinkWithType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    current_user: Optional[shared_link_with_type.LinkWithType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user') }})
    current_user_actor: Optional[shared_link_with_type.LinkWithType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_actor') }})
    current_user_organization: Optional[shared_link_with_type.LinkWithType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization') }})
    current_user_organizations: Optional[list[shared_link_with_type.LinkWithType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organizations') }})
    current_user_public: Optional[shared_link_with_type.LinkWithType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_public') }})
    security_advisories: Optional[shared_link_with_type.LinkWithType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_advisories') }})
    

@dataclass_json
@dataclasses.dataclass
class Feed:
    r"""Feed
    Feed
    """
    
    links: FeedLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    timeline_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline_url') }})
    user_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_url') }})
    current_user_actor_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_actor_url') }})
    current_user_organization_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization_url') }})
    current_user_organization_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization_urls') }})
    current_user_public_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_public_url') }})
    current_user_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_url') }})
    
