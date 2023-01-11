import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3ViewAddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    mask: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    subtree: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subtree', 'style': 'simple', 'explode': False }})
    view_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'viewName', 'style': 'simple', 'explode': False }})
    view_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'viewType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewAddRequest:
    path_params: ProtocolSnmpv3ViewAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3ViewAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_view_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
