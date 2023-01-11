import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdeploymentinstancesinput as shared_listdeploymentinstancesinput
from ..shared import listdeploymentinstancesoutput as shared_listdeploymentinstancesoutput


@dataclasses.dataclass
class ListDeploymentInstancesQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDeploymentInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_DEPLOYMENT_INSTANCES = "CodeDeploy_20141006.ListDeploymentInstances"


@dataclasses.dataclass
class ListDeploymentInstancesHeaders:
    x_amz_target: ListDeploymentInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeploymentInstancesRequest:
    headers: ListDeploymentInstancesHeaders = dataclasses.field()
    query_params: ListDeploymentInstancesQueryParams = dataclasses.field()
    request: shared_listdeploymentinstancesinput.ListDeploymentInstancesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDeploymentInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_not_started_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_compute_platform_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_instance_type_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_type_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_filter_name_exception: Optional[Any] = dataclasses.field(default=None)
    list_deployment_instances_output: Optional[shared_listdeploymentinstancesoutput.ListDeploymentInstancesOutput] = dataclasses.field(default=None)
    
