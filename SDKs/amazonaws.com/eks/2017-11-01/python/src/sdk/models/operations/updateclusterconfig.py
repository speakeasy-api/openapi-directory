import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logsetup as shared_logsetup
from ..shared import updateclusterconfigresponse as shared_updateclusterconfigresponse


@dataclasses.dataclass
class UpdateClusterConfigPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateClusterConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateClusterConfigRequestBodyLogging:
    r"""UpdateClusterConfigRequestBodyLogging
    An object representing the logging configuration for resources in your cluster.
    """
    
    cluster_logging: Optional[list[shared_logsetup.LogSetup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterLogging') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateClusterConfigRequestBodyResourcesVpcConfig:
    r"""UpdateClusterConfigRequestBodyResourcesVpcConfig
    An object representing the VPC configuration to use for an Amazon EKS cluster.
    """
    
    endpoint_private_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPrivateAccess') }})
    endpoint_public_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPublicAccess') }})
    public_access_cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccessCidrs') }})
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    subnet_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateClusterConfigRequestBody:
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    logging: Optional[UpdateClusterConfigRequestBodyLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    resources_vpc_config: Optional[UpdateClusterConfigRequestBodyResourcesVpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesVpcConfig') }})
    

@dataclasses.dataclass
class UpdateClusterConfigRequest:
    headers: UpdateClusterConfigHeaders = dataclasses.field()
    path_params: UpdateClusterConfigPathParams = dataclasses.field()
    request: UpdateClusterConfigRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateClusterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    update_cluster_config_response: Optional[shared_updateclusterconfigresponse.UpdateClusterConfigResponse] = dataclasses.field(default=None)
    
