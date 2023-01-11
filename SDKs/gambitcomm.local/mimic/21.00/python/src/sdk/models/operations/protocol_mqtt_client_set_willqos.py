import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetWillqosPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    qos: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qos', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillqosRequest:
    path_params: ProtocolMqttClientSetWillqosPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillqosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_willqos_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
