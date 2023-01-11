import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class Status:
    r"""Status
    The status of a commit.
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    context: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    creator: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    target_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
