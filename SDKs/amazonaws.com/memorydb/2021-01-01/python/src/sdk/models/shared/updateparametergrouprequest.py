import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameternamevalue as shared_parameternamevalue


@dataclass_json
@dataclasses.dataclass
class UpdateParameterGroupRequest:
    parameter_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    parameter_name_values: list[shared_parameternamevalue.ParameterNameValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterNameValues') }})
    
