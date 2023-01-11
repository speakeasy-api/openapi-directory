import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetPasswordPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    password: str = dataclasses.field(metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetPasswordRequest:
    path_params: ProtocolMqttClientSetPasswordPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_password_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
