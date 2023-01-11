import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3AccessClearPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessClearRequest:
    path_params: ProtocolSnmpv3AccessClearPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessClearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_access_clear_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
