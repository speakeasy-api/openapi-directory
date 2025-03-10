"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import check_run as shared_check_run
from ..shared import status_enum as shared_status_enum
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ChecksListForRefFilterEnum(str, Enum):
    r"""Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`."""
    LATEST = 'latest'
    ALL = 'all'


@dataclasses.dataclass
class ChecksListForRefRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})  
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    r"""ref parameter"""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})  
    app_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})  
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    r"""Returns check runs with the specified `name`."""  
    filter: Optional[ChecksListForRefFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    r"""Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""Results per page (max 100)"""  
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    r"""Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ChecksListForRef200ApplicationJSON:
    r"""Response"""
    
    check_runs: list[shared_check_run.CheckRun] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('check_runs') }})  
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_count') }})  
    

@dataclasses.dataclass
class ChecksListForRefResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    checks_list_for_ref_200_application_json_object: Optional[ChecksListForRef200ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    