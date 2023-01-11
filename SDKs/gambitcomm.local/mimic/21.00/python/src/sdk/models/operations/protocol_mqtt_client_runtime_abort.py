import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientRuntimeAbortPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeAbortRequest:
    path_params: ProtocolMqttClientRuntimeAbortPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientRuntimeAbortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_runtime_abort_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
