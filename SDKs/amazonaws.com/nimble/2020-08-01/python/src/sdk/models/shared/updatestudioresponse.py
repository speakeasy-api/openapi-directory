import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studio as shared_studio


@dataclass_json
@dataclasses.dataclass
class UpdateStudioResponse:
    studio: Optional[shared_studio.Studio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studio') }})
    
