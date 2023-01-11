import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateactiontype_enum as shared_updateactiontype_enum
from ..shared import typedattributevalue as shared_typedattributevalue


@dataclass_json
@dataclasses.dataclass
class ObjectAttributeAction:
    r"""ObjectAttributeAction
    The action to take on the object attribute.
    """
    
    object_attribute_action_type: Optional[shared_updateactiontype_enum.UpdateActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeActionType') }})
    object_attribute_update_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeUpdateValue') }})
    
