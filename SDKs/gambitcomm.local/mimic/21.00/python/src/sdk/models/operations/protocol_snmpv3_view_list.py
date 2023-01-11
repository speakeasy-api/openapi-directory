import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3ViewListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewListRequest:
    path_params: ProtocolSnmpv3ViewListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_view_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
