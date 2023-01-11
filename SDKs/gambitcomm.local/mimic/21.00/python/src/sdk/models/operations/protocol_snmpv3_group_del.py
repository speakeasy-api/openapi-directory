import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GroupDelPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupDelRequest:
    path_params: ProtocolSnmpv3GroupDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_group_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
