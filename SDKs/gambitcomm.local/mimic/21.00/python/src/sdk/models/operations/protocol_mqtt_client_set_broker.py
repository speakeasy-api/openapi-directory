import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolMqttClientSetBrokerPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    broker_addr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'brokerAddr', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolMqttClientSetBrokerRequest:
    path_params: ProtocolMqttClientSetBrokerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolMqttClientSetBrokerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_mqtt_client_set_broker_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
