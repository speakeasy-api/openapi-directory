import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSubscribeGetPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    sub_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSubscribeGetRequest:
    path_params: ProtocolMqttClientSubscribeGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSubscribeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_subscribe_get_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
