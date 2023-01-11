import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createprovisioningtemplateversionresponse as shared_createprovisioningtemplateversionresponse


@dataclasses.dataclass
class CreateProvisioningTemplateVersionPathParams:
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateVersionQueryParams:
    set_as_default: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setAsDefault', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProvisioningTemplateVersionRequestBody:
    template_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateVersionRequest:
    headers: CreateProvisioningTemplateVersionHeaders = dataclasses.field()
    path_params: CreateProvisioningTemplateVersionPathParams = dataclasses.field()
    query_params: CreateProvisioningTemplateVersionQueryParams = dataclasses.field()
    request: CreateProvisioningTemplateVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProvisioningTemplateVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_resource_update_exception: Optional[Any] = dataclasses.field(default=None)
    create_provisioning_template_version_response: Optional[shared_createprovisioningtemplateversionresponse.CreateProvisioningTemplateVersionResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    versions_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
