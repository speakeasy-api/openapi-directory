import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetKeepalivePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    alive_time: int = dataclasses.field(metadata={'path_param': { 'field_name': 'aliveTime', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetKeepaliveRequest:
    path_params: ProtocolMqttClientSetKeepalivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetKeepaliveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_keepalive_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
