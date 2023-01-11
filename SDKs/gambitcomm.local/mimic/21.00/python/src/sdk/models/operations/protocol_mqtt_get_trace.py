import dataclasses
from typing import Optional
from ..shared import configmqtt as shared_configmqtt


@dataclasses.dataclass
class ProtocolMqttGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttGetTraceRequest:
    path_params: ProtocolMqttGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_mqtt: Optional[shared_configmqtt.ConfigMqtt] = dataclasses.field(default=None)
    
