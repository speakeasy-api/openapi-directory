import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkattributeaction as shared_linkattributeaction
from ..shared import attributekey as shared_attributekey


@dataclass_json
@dataclasses.dataclass
class LinkAttributeUpdate:
    r"""LinkAttributeUpdate
    Structure that contains attribute update information.
    """
    
    attribute_action: Optional[shared_linkattributeaction.LinkAttributeAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeAction') }})
    attribute_key: Optional[shared_attributekey.AttributeKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeKey') }})
    
