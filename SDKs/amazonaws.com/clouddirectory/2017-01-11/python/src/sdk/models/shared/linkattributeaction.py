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
class LinkAttributeAction:
    r"""LinkAttributeAction
    The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
    """
    
    attribute_action_type: Optional[shared_updateactiontype_enum.UpdateActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeActionType') }})
    attribute_update_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdateValue') }})
    
