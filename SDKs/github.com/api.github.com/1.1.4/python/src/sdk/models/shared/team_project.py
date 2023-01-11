import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class TeamProjectPermissions:
    admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    read: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamProject:
    r"""TeamProject
    A team's access to a project.
    """
    
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    columns_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns_url') }})
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    creator: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    owner_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_url') }})
    permissions: TeamProjectPermissions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    organization_permission: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_permission') }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    
