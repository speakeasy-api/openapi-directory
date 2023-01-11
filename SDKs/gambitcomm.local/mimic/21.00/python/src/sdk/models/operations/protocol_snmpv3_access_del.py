import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3AccessDelPathParams:
    access_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessName', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessDelRequest:
    path_params: ProtocolSnmpv3AccessDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_access_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
