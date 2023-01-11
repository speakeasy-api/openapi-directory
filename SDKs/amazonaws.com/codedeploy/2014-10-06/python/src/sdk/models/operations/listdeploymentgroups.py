import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdeploymentgroupsinput as shared_listdeploymentgroupsinput
from ..shared import listdeploymentgroupsoutput as shared_listdeploymentgroupsoutput


@dataclasses.dataclass
class ListDeploymentGroupsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDeploymentGroupsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_DEPLOYMENT_GROUPS = "CodeDeploy_20141006.ListDeploymentGroups"


@dataclasses.dataclass
class ListDeploymentGroupsHeaders:
    x_amz_target: ListDeploymentGroupsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeploymentGroupsRequest:
    headers: ListDeploymentGroupsHeaders = dataclasses.field()
    query_params: ListDeploymentGroupsQueryParams = dataclasses.field()
    request: shared_listdeploymentgroupsinput.ListDeploymentGroupsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDeploymentGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_deployment_groups_output: Optional[shared_listdeploymentgroupsoutput.ListDeploymentGroupsOutput] = dataclasses.field(default=None)
    
