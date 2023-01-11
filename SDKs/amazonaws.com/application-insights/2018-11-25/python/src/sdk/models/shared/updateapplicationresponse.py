import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationinfo as shared_applicationinfo


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationResponse:
    application_info: Optional[shared_applicationinfo.ApplicationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationInfo') }})
    
