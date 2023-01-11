import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3UserClearPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3UserClearRequest:
    path_params: ProtocolSnmpv3UserClearPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3UserClearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_user_clear_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
