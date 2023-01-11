import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GroupAddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    security_model: str = dataclasses.field(metadata={'path_param': { 'field_name': 'securityModel', 'style': 'simple', 'explode': False }})
    security_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'securityName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupAddRequest:
    path_params: ProtocolSnmpv3GroupAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GroupAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_group_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
