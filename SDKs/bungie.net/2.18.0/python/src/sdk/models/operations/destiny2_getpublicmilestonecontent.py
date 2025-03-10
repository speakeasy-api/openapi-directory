"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import destiny_milestones_destinymilestonecontent as shared_destiny_milestones_destinymilestonecontent
from typing import Optional


@dataclasses.dataclass
class Destiny2GetPublicMilestoneContentRequest:
    
    milestone_hash: int = dataclasses.field(metadata={'path_param': { 'field_name': 'milestoneHash', 'style': 'simple', 'explode': False }})
    r"""The identifier for the milestone to be returned."""  
    

@dataclasses.dataclass
class Destiny2GetPublicMilestoneContent200Wildcard:
    r"""Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint."""
    
    detailed_error_trace: Optional[str] = dataclasses.field(default=None)  
    error_code: Optional[int] = dataclasses.field(default=None)  
    error_status: Optional[str] = dataclasses.field(default=None)  
    message: Optional[str] = dataclasses.field(default=None)  
    message_data: Optional[dict[str, str]] = dataclasses.field(default=None)  
    response: Optional[shared_destiny_milestones_destinymilestonecontent.DestinyMilestonesDestinyMilestoneContent] = dataclasses.field(default=None)
    r"""Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint."""  
    throttle_seconds: Optional[int] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class Destiny2GetPublicMilestoneContentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    