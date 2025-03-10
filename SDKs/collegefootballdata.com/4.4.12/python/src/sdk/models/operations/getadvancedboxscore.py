"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import boxscore as shared_boxscore
from typing import Optional


@dataclasses.dataclass
class GetAdvancedBoxScoreRequest:
    
    game_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    r"""Game id parameters"""  
    

@dataclasses.dataclass
class GetAdvancedBoxScoreResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    box_score: Optional[shared_boxscore.BoxScore] = dataclasses.field(default=None)
    r"""successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    