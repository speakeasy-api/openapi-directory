"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listsnapshotsresult as shared_listsnapshotsresult
from typing import Any, Optional


@dataclasses.dataclass
class ListSnapshotsRequest:
    
    game_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'GameName', 'style': 'simple', 'explode': False }})
    r"""The name of the game."""  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    r"""<p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>"""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    r"""<p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ListSnapshotsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    list_snapshots_result: Optional[shared_listsnapshotsresult.ListSnapshotsResult] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    