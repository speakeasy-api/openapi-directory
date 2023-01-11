import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputconfiguration as shared_inputconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateInputResponse:
    input_configuration: Optional[shared_inputconfiguration.InputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguration') }})
    
