import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateparamtype_enum as shared_updateparamtype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateParam:
    r"""UpdateParam
    An object representing the details of an update request.
    """
    
    type: Optional[shared_updateparamtype_enum.UpdateParamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
