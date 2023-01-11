import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetUsernamePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetUsernameRequest:
    path_params: ProtocolMqttClientSetUsernamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetUsernameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_username_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
