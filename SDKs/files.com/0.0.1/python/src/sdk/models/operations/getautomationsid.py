import dataclasses
from typing import Optional
from ..shared import automationentity as shared_automationentity


@dataclasses.dataclass
class GetAutomationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomationsIDRequest:
    path_params: GetAutomationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    automation_entity: Optional[shared_automationentity.AutomationEntity] = dataclasses.field(default=None)
    
