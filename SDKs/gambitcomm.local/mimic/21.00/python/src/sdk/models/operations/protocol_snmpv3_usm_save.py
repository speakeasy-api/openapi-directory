import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3UsmSavePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3UsmSaveRequest:
    path_params: ProtocolSnmpv3UsmSavePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3UsmSaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_usm_save_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
