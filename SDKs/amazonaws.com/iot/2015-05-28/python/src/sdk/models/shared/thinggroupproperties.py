import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributepayload as shared_attributepayload


@dataclass_json
@dataclasses.dataclass
class ThingGroupProperties:
    r"""ThingGroupProperties
    Thing group properties.
    """
    
    attribute_payload: Optional[shared_attributepayload.AttributePayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePayload') }})
    thing_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupDescription') }})
    
