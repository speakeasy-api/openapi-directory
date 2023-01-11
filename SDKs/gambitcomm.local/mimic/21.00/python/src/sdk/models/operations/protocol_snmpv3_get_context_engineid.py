import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3GetContextEngineidPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GetContextEngineidRequest:
    path_params: ProtocolSnmpv3GetContextEngineidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GetContextEngineidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_get_context_engineid_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
