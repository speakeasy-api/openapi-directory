import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetWillretainPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    retain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'retain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillretainRequest:
    path_params: ProtocolMqttClientSetWillretainPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillretainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_willretain_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
