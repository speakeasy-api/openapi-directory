import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientGetProtstatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientGetProtstateRequest:
    path_params: ProtocolMqttClientGetProtstatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientGetProtstateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_get_protstate_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
