import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatenodegroupversionresponse as shared_updatenodegroupversionresponse


@dataclasses.dataclass
class UpdateNodegroupVersionPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    nodegroup_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodegroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNodegroupVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNodegroupVersionRequestBodyLaunchTemplate:
    r"""UpdateNodegroupVersionRequestBodyLaunchTemplate
    <p>An object representing a node group launch template specification. The launch template cannot include <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html\"> <code>SubnetId</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html\"> <code>IamInstanceProfile</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html\"> <code>RequestSpotInstances</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html\"> <code>HibernationOptions</code> </a>, or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html\"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html\"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html\">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNodegroupVersionRequestBody:
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    launch_template: Optional[UpdateNodegroupVersionRequestBodyLaunchTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    release_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclasses.dataclass
class UpdateNodegroupVersionRequest:
    headers: UpdateNodegroupVersionHeaders = dataclasses.field()
    path_params: UpdateNodegroupVersionPathParams = dataclasses.field()
    request: UpdateNodegroupVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNodegroupVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    update_nodegroup_version_response: Optional[shared_updatenodegroupversionresponse.UpdateNodegroupVersionResponse] = dataclasses.field(default=None)
    
