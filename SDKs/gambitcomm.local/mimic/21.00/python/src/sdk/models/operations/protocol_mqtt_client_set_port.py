import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetPortPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: str = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetPortRequest:
    path_params: ProtocolMqttClientSetPortPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetPortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_port_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
