import dataclasses
from typing import Optional
from ..shared import teamtalent as shared_teamtalent


@dataclasses.dataclass
class GetTalentQueryParams:
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTalentRequest:
    query_params: GetTalentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTalentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_talents: Optional[list[shared_teamtalent.TeamTalent]] = dataclasses.field(default=None)
    
