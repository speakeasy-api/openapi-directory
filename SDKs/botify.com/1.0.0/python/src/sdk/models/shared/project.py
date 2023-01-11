import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectsettingsserializer as shared_projectsettingsserializer
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class Project:
    current_settings: shared_projectsettingsserializer.ProjectSettingsSerializer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_settings') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    
