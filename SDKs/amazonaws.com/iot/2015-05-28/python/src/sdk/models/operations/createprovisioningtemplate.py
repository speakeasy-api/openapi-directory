import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import createprovisioningtemplateresponse as shared_createprovisioningtemplateresponse


@dataclasses.dataclass
class CreateProvisioningTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProvisioningTemplateRequestBodyPreProvisioningHook:
    r"""CreateProvisioningTemplateRequestBodyPreProvisioningHook
    Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
    """
    
    payload_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadVersion') }})
    target_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProvisioningTemplateRequestBody:
    provisioning_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningRoleArn') }})
    template_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    pre_provisioning_hook: Optional[CreateProvisioningTemplateRequestBodyPreProvisioningHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preProvisioningHook') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateRequest:
    headers: CreateProvisioningTemplateHeaders = dataclasses.field()
    request: CreateProvisioningTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_provisioning_template_response: Optional[shared_createprovisioningtemplateresponse.CreateProvisioningTemplateResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
