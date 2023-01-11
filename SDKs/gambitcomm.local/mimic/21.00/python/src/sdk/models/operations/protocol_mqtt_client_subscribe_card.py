import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSubscribeCardPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSubscribeCardRequest:
    path_params: ProtocolMqttClientSubscribeCardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSubscribeCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_subscribe_card_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
