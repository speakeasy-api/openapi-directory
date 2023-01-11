import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetOnDisconnectPathParams:
    action: str = dataclasses.field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetOnDisconnectRequest:
    path_params: ProtocolMqttClientSetOnDisconnectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetOnDisconnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_on_disconnect_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
