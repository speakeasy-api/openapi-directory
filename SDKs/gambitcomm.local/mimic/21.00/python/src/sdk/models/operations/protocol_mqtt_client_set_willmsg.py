import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetWillmsgPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    msg: str = dataclasses.field(metadata={'path_param': { 'field_name': 'msg', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillmsgRequest:
    path_params: ProtocolMqttClientSetWillmsgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetWillmsgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_willmsg_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
