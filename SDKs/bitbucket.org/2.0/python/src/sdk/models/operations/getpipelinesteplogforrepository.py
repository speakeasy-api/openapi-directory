"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class GetPipelineStepLogForRepositoryRequest:
    
    pipeline_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the pipeline."""  
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    r"""The repository."""  
    step_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    r"""The UUID of the step."""  
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    r"""This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`."""  
    

@dataclasses.dataclass
class GetPipelineStepLogForRepositoryResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    