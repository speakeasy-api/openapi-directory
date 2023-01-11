import dataclasses
from typing import Optional
from ..shared import configmqtt as shared_configmqtt


@dataclasses.dataclass
class ProtocolMqttGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttGetConfigRequest:
    path_params: ProtocolMqttGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_mqtt: Optional[shared_configmqtt.ConfigMqtt] = dataclasses.field(default=None)
    
