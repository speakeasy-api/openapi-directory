import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GetEngineidPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEngineidRequest:
    path_params: ProtocolSnmpv3GetEngineidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GetEngineidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_get_engineid_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
