import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributeaction_enum as shared_attributeaction_enum
from ..shared import attributevalue as shared_attributevalue


@dataclass_json
@dataclasses.dataclass
class AttributeValueUpdate:
    action: Optional[shared_attributeaction_enum.AttributeActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    value: Optional[shared_attributevalue.AttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
