import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3UserDelPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    user_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3UserDelRequest:
    path_params: ProtocolSnmpv3UserDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3UserDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_user_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
