import dataclasses
from typing import Optional
from ..shared import boxscore as shared_boxscore


@dataclasses.dataclass
class GetAdvancedBoxScoreQueryParams:
    game_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdvancedBoxScoreRequest:
    query_params: GetAdvancedBoxScoreQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdvancedBoxScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score: Optional[shared_boxscore.BoxScore] = dataclasses.field(default=None)
    
