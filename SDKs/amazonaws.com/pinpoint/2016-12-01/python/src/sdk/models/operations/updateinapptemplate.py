import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagecontent as shared_inappmessagecontent
from ..shared import layout_enum as shared_layout_enum
from ..shared import updateinapptemplateresponse as shared_updateinapptemplateresponse


@dataclasses.dataclass
class UpdateInAppTemplatePathParams:
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInAppTemplateQueryParams:
    create_new_version: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'create-new-version', 'style': 'form', 'explode': True }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateInAppTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateInAppTemplateRequestBodyInAppTemplateRequest:
    r"""UpdateInAppTemplateRequestBodyInAppTemplateRequest
    InApp Template Request.
    """
    
    content: Optional[list[shared_inappmessagecontent.InAppMessageContent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    custom_config: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomConfig') }})
    layout: Optional[shared_layout_enum.LayoutEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layout') }})
    template_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateInAppTemplateRequestBody:
    in_app_template_request: UpdateInAppTemplateRequestBodyInAppTemplateRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppTemplateRequest') }})
    

@dataclasses.dataclass
class UpdateInAppTemplateRequest:
    headers: UpdateInAppTemplateHeaders = dataclasses.field()
    path_params: UpdateInAppTemplatePathParams = dataclasses.field()
    query_params: UpdateInAppTemplateQueryParams = dataclasses.field()
    request: UpdateInAppTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateInAppTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_in_app_template_response: Optional[shared_updateinapptemplateresponse.UpdateInAppTemplateResponse] = dataclasses.field(default=None)
    
