import dataclasses
from typing import Optional
from ..shared import conferencesprating as shared_conferencesprating


@dataclasses.dataclass
class GetConferenceSpRatingsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConferenceSpRatingsRequest:
    query_params: GetConferenceSpRatingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConferenceSpRatingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conference_sp_ratings: Optional[list[shared_conferencesprating.ConferenceSpRating]] = dataclasses.field(default=None)
    
