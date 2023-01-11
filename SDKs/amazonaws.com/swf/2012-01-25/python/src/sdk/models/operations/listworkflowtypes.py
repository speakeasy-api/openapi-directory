import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listworkflowtypesinput as shared_listworkflowtypesinput
from ..shared import workflowtypeinfos as shared_workflowtypeinfos


@dataclasses.dataclass
class ListWorkflowTypesQueryParams:
    maximum_page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class ListWorkflowTypesXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES = "SimpleWorkflowService.ListWorkflowTypes"


@dataclasses.dataclass
class ListWorkflowTypesHeaders:
    x_amz_target: ListWorkflowTypesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkflowTypesRequest:
    headers: ListWorkflowTypesHeaders = dataclasses.field()
    query_params: ListWorkflowTypesQueryParams = dataclasses.field()
    request: shared_listworkflowtypesinput.ListWorkflowTypesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListWorkflowTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    workflow_type_infos: Optional[shared_workflowtypeinfos.WorkflowTypeInfos] = dataclasses.field(default=None)
    
