import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientRuntimeConnectPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeConnectRequest:
    path_params: ProtocolMqttClientRuntimeConnectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeConnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_runtime_connect_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
