import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settings as shared_settings


@dataclass_json
@dataclasses.dataclass
class UpdateSettingsResponse:
    settings: Optional[shared_settings.Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
