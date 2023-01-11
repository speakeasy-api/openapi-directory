import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payload as shared_payload


@dataclass_json
@dataclasses.dataclass
class IotTopicPublishAction:
    r"""IotTopicPublishAction
    Information required to publish the MQTT message through the AWS IoT message broker.
    """
    
    mqtt_topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttTopic') }})
    payload: Optional[shared_payload.Payload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
