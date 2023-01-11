import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertynotificationstate_enum as shared_propertynotificationstate_enum


@dataclass_json
@dataclasses.dataclass
class PropertyNotification:
    r"""PropertyNotification
    Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html\">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    state: shared_propertynotificationstate_enum.PropertyNotificationStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
