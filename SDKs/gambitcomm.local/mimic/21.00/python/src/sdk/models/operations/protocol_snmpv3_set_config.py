import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3SetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3SetConfigRequest:
    path_params: ProtocolSnmpv3SetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3SetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_set_config_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
