import dataclasses
from typing import Optional


@dataclasses.dataclass
class SplitOidPathParams:
    oid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SplitOidRequest:
    path_params: SplitOidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SplitOidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    split_oid_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
