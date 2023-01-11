import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3VacmSaveasPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    filename: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3VacmSaveasRequest:
    path_params: ProtocolSnmpv3VacmSaveasPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3VacmSaveasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_vacm_saveas_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
