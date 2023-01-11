import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GetEnginebootsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEnginebootsRequest:
    path_params: ProtocolSnmpv3GetEnginebootsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEnginebootsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_get_engineboots_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
