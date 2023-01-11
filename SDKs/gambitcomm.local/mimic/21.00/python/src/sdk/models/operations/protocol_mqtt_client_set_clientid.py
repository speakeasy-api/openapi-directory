import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetClientidPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetClientidRequest:
    path_params: ProtocolMqttClientSetClientidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetClientidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_clientid_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
