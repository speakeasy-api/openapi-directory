import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverymediumtype_enum as shared_deliverymediumtype_enum


@dataclass_json
@dataclasses.dataclass
class CodeDeliveryDetailsType:
    r"""CodeDeliveryDetailsType
    The code delivery details being returned from the server.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    delivery_medium: Optional[shared_deliverymediumtype_enum.DeliveryMediumTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMedium') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    
