import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3ViewDelPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    view_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'viewName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewDelRequest:
    path_params: ProtocolSnmpv3ViewDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_view_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
