import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addthingstothinggroupparams as shared_addthingstothinggroupparams
from ..shared import enableiotloggingparams as shared_enableiotloggingparams
from ..shared import publishfindingtosnsparams as shared_publishfindingtosnsparams
from ..shared import replacedefaultpolicyversionparams as shared_replacedefaultpolicyversionparams
from ..shared import updatecacertificateparams as shared_updatecacertificateparams
from ..shared import updatedevicecertificateparams as shared_updatedevicecertificateparams
from ..shared import tag as shared_tag
from ..shared import createmitigationactionresponse as shared_createmitigationactionresponse


@dataclasses.dataclass
class CreateMitigationActionPathParams:
    action_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMitigationActionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMitigationActionRequestBodyActionParams:
    r"""CreateMitigationActionRequestBodyActionParams
    The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    """
    
    add_things_to_thing_group_params: Optional[shared_addthingstothinggroupparams.AddThingsToThingGroupParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addThingsToThingGroupParams') }})
    enable_io_t_logging_params: Optional[shared_enableiotloggingparams.EnableIoTLoggingParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIoTLoggingParams') }})
    publish_finding_to_sns_params: Optional[shared_publishfindingtosnsparams.PublishFindingToSnsParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingToSnsParams') }})
    replace_default_policy_version_params: Optional[shared_replacedefaultpolicyversionparams.ReplaceDefaultPolicyVersionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDefaultPolicyVersionParams') }})
    update_ca_certificate_params: Optional[shared_updatecacertificateparams.UpdateCaCertificateParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCACertificateParams') }})
    update_device_certificate_params: Optional[shared_updatedevicecertificateparams.UpdateDeviceCertificateParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeviceCertificateParams') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMitigationActionRequestBody:
    action_params: CreateMitigationActionRequestBodyActionParams = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionParams') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateMitigationActionRequest:
    headers: CreateMitigationActionHeaders = dataclasses.field()
    path_params: CreateMitigationActionPathParams = dataclasses.field()
    request: CreateMitigationActionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMitigationActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_mitigation_action_response: Optional[shared_createmitigationactionresponse.CreateMitigationActionResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
