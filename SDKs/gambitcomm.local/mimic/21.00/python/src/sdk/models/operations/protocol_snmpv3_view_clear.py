import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3ViewClearPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewClearRequest:
    path_params: ProtocolSnmpv3ViewClearPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewClearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_view_clear_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
