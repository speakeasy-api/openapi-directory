import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmpv3UserAddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    auth_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'authKey', 'style': 'simple', 'explode': False }})
    auth_protocol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'authProtocol', 'style': 'simple', 'explode': False }})
    priv_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'privKey', 'style': 'simple', 'explode': False }})
    priv_protocol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'privProtocol', 'style': 'simple', 'explode': False }})
    security_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'securityName', 'style': 'simple', 'explode': False }})
    user_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3UserAddRequest:
    path_params: ProtocolSnmpv3UserAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3UserAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmpv3_user_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
