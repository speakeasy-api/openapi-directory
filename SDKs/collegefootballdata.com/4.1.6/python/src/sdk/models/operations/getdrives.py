import dataclasses
from typing import Optional
from ..shared import drive as shared_drive


@dataclasses.dataclass
class GetDrivesQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    defense: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'defense', 'style': 'form', 'explode': True }})
    defense_conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'defenseConference', 'style': 'form', 'explode': True }})
    offense: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offense', 'style': 'form', 'explode': True }})
    offense_conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offenseConference', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDrivesRequest:
    query_params: GetDrivesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDrivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    drives: Optional[list[shared_drive.Drive]] = dataclasses.field(default=None)
    
