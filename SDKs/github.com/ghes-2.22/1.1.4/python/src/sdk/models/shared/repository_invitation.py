import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository


@dataclass_json
@dataclasses.dataclass
class RepositoryInvitationSimpleUser:
    r"""RepositoryInvitationSimpleUser
    Simple User
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    
class RepositoryInvitationPermissionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"
    TRIAGE = "triage"
    MAINTAIN = "maintain"


@dataclass_json
@dataclasses.dataclass
class RepositoryInvitation:
    r"""RepositoryInvitation
    Repository invitations let you manage who you collaborate with.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invitee: RepositoryInvitationSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitee') }})
    inviter: RepositoryInvitationSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inviter') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    permissions: RepositoryInvitationPermissionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    expired: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    
