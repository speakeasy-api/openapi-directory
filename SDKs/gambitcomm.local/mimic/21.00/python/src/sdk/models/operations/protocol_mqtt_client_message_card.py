import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientMessageCardPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientMessageCardRequest:
    path_params: ProtocolMqttClientMessageCardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientMessageCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_message_card_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
