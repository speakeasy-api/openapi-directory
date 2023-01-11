import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3AccessListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessListRequest:
    path_params: ProtocolSnmpv3AccessListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3AccessListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_access_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
