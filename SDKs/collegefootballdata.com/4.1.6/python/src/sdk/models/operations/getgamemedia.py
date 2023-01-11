import dataclasses
from typing import Optional
from ..shared import gamemedia as shared_gamemedia


@dataclasses.dataclass
class GetGameMediaQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    media_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mediaType', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGameMediaRequest:
    query_params: GetGameMediaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGameMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    game_medias: Optional[list[shared_gamemedia.GameMedia]] = dataclasses.field(default=None)
    
