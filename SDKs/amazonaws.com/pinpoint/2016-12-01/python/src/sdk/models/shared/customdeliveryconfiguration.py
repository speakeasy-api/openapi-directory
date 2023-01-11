import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import _endpointtypeselement_enum as shared__endpointtypeselement_enum


@dataclass_json
@dataclasses.dataclass
class CustomDeliveryConfiguration:
    r"""CustomDeliveryConfiguration
    Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
    """
    
    delivery_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryUri') }})
    endpoint_types: Optional[list[shared__endpointtypeselement_enum.EndpointTypesElementEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointTypes') }})
    
