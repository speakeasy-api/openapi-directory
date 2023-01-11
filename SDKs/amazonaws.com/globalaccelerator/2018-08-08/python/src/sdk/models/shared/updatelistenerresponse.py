import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listener as shared_listener


@dataclass_json
@dataclasses.dataclass
class UpdateListenerResponse:
    listener: Optional[shared_listener.Listener] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Listener') }})
    
