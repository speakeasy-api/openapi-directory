import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientRuntimeDisconnectPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeDisconnectRequest:
    path_params: ProtocolMqttClientRuntimeDisconnectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeDisconnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_runtime_disconnect_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
