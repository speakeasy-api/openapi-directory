import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetCleansessionPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    clean_or_not: int = dataclasses.field(metadata={'path_param': { 'field_name': 'cleanOrNot', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetCleansessionRequest:
    path_params: ProtocolMqttClientSetCleansessionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetCleansessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_cleansession_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
