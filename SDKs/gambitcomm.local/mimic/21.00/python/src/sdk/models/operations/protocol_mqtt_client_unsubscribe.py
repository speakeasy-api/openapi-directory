import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientUnsubscribePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    sub_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientUnsubscribeRequest:
    path_params: ProtocolMqttClientUnsubscribePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientUnsubscribeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_unsubscribe_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
