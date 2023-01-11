import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientMessageGetPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    msg_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'msgNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientMessageGetRequest:
    path_params: ProtocolMqttClientMessageGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientMessageGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_message_get_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
