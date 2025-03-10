"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import soprecommendation as shared_soprecommendation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListSopRecommendationsResponse:
    r"""Success"""
    
    sop_recommendations: list[shared_soprecommendation.SopRecommendation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sopRecommendations') }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    