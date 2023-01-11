import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GetEnginetimePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEnginetimeRequest:
    path_params: ProtocolSnmpv3GetEnginetimePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEnginetimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_get_enginetime_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
