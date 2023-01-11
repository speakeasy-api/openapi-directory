import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdeploymentconfigsinput as shared_listdeploymentconfigsinput
from ..shared import listdeploymentconfigsoutput as shared_listdeploymentconfigsoutput


@dataclasses.dataclass
class ListDeploymentConfigsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDeploymentConfigsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_DEPLOYMENT_CONFIGS = "CodeDeploy_20141006.ListDeploymentConfigs"


@dataclasses.dataclass
class ListDeploymentConfigsHeaders:
    x_amz_target: ListDeploymentConfigsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeploymentConfigsRequest:
    headers: ListDeploymentConfigsHeaders = dataclasses.field()
    query_params: ListDeploymentConfigsQueryParams = dataclasses.field()
    request: shared_listdeploymentconfigsinput.ListDeploymentConfigsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDeploymentConfigsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_deployment_configs_output: Optional[shared_listdeploymentconfigsoutput.ListDeploymentConfigsOutput] = dataclasses.field(default=None)
    
