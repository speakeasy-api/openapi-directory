"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import paginated_workspace_memberships as shared_paginated_workspace_memberships
from ..shared import security as shared_security
from typing import Any, Optional


@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsSecurity:
    
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'Authorization' }})  
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})  
    oauth2: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsRequest:
    
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    r"""This can either be the workspace ID (slug) or the workspace UUID
    surrounded by curly-braces, for example: `{workspace UUID}`.
    """  
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    r"""Query string to narrow down the response as per
    [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
    """  
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""The request wasn't authenticated."""  
    paginated_workspace_memberships: Optional[shared_paginated_workspace_memberships.PaginatedWorkspaceMemberships] = dataclasses.field(default=None)
    r"""The list of users that are part of a workspace, along with their permission."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    