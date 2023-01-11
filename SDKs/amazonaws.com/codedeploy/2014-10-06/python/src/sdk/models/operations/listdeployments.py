import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdeploymentsinput as shared_listdeploymentsinput
from ..shared import listdeploymentsoutput as shared_listdeploymentsoutput


@dataclasses.dataclass
class ListDeploymentsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDeploymentsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_DEPLOYMENTS = "CodeDeploy_20141006.ListDeployments"


@dataclasses.dataclass
class ListDeploymentsHeaders:
    x_amz_target: ListDeploymentsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeploymentsRequest:
    headers: ListDeploymentsHeaders = dataclasses.field()
    query_params: ListDeploymentsQueryParams = dataclasses.field()
    request: shared_listdeploymentsinput.ListDeploymentsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDeploymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_external_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_time_range_exception: Optional[Any] = dataclasses.field(default=None)
    list_deployments_output: Optional[shared_listdeploymentsoutput.ListDeploymentsOutput] = dataclasses.field(default=None)
    
