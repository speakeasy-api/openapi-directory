"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listmigrationtasksrequest as shared_listmigrationtasksrequest
from ..shared import listmigrationtasksresult as shared_listmigrationtasksresult
from enum import Enum
from typing import Any, Optional

class ListMigrationTasksXAmzTargetEnum(str, Enum):
    AWS_MIGRATION_HUB_LIST_MIGRATION_TASKS = 'AWSMigrationHub.ListMigrationTasks'


@dataclasses.dataclass
class ListMigrationTasksRequest:
    
    list_migration_tasks_request: shared_listmigrationtasksrequest.ListMigrationTasksRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: ListMigrationTasksXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    r"""Pagination limit"""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    r"""Pagination token"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ListMigrationTasksResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    home_region_not_set_exception: Optional[Any] = dataclasses.field(default=None)
    r"""HomeRegionNotSetException"""  
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerError"""  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    list_migration_tasks_result: Optional[shared_listmigrationtasksresult.ListMigrationTasksResult] = dataclasses.field(default=None)
    r"""Success"""  
    policy_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""PolicyErrorException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServiceUnavailableException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    