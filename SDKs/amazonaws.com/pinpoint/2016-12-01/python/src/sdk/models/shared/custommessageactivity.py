import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import _endpointtypeselement_enum as shared__endpointtypeselement_enum
from ..shared import journeycustommessage as shared_journeycustommessage


@dataclass_json
@dataclasses.dataclass
class CustomMessageActivity:
    r"""CustomMessageActivity
    The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
    """
    
    delivery_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryUri') }})
    endpoint_types: Optional[list[shared__endpointtypeselement_enum.EndpointTypesElementEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointTypes') }})
    message_config: Optional[shared_journeycustommessage.JourneyCustomMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfig') }})
    next_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateVersion') }})
    
