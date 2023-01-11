import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetWilltopicPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    topic: str = dataclasses.field(metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetWilltopicRequest:
    path_params: ProtocolMqttClientSetWilltopicPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetWilltopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_willtopic_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
