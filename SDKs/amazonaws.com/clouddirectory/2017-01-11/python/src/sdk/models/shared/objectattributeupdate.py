import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectattributeaction as shared_objectattributeaction
from ..shared import attributekey as shared_attributekey


@dataclass_json
@dataclasses.dataclass
class ObjectAttributeUpdate:
    r"""ObjectAttributeUpdate
    Structure that contains attribute update information.
    """
    
    object_attribute_action: Optional[shared_objectattributeaction.ObjectAttributeAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeAction') }})
    object_attribute_key: Optional[shared_attributekey.AttributeKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeKey') }})
    
