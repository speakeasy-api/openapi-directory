import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GroupClearPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupClearRequest:
    path_params: ProtocolSnmpv3GroupClearPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupClearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_group_clear_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
