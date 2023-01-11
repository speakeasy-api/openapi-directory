import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowChangeAttrPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    field_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'field-num', 'style': 'simple', 'explode': False }})
    flowset_uid: int = dataclasses.field(metadata={'path_param': { 'field_name': 'flowset-uid', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowChangeAttrRequest:
    path_params: ProtocolNetflowChangeAttrPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowChangeAttrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_change_attr_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
