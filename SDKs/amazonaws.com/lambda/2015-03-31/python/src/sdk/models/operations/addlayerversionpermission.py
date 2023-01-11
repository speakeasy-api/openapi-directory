import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addlayerversionpermissionresponse as shared_addlayerversionpermissionresponse


@dataclasses.dataclass
class AddLayerVersionPermissionPathParams:
    layer_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LayerName', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'VersionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddLayerVersionPermissionQueryParams:
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RevisionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddLayerVersionPermissionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddLayerVersionPermissionRequestBody:
    action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    principal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    statement_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementId') }})
    organization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    

@dataclasses.dataclass
class AddLayerVersionPermissionRequest:
    headers: AddLayerVersionPermissionHeaders = dataclasses.field()
    path_params: AddLayerVersionPermissionPathParams = dataclasses.field()
    query_params: AddLayerVersionPermissionQueryParams = dataclasses.field()
    request: AddLayerVersionPermissionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddLayerVersionPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_layer_version_permission_response: Optional[shared_addlayerversionpermissionresponse.AddLayerVersionPermissionResponse] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    policy_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
