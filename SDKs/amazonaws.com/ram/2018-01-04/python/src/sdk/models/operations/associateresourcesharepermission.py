import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associateresourcesharepermissionresponse as shared_associateresourcesharepermissionresponse


@dataclasses.dataclass
class AssociateResourceSharePermissionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssociateResourceSharePermissionRequestBody:
    permission_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionArn') }})
    resource_share_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareArn') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    permission_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionVersion') }})
    replace: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replace') }})
    

@dataclasses.dataclass
class AssociateResourceSharePermissionRequest:
    headers: AssociateResourceSharePermissionHeaders = dataclasses.field()
    request: AssociateResourceSharePermissionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateResourceSharePermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_resource_share_permission_response: Optional[shared_associateresourcesharepermissionresponse.AssociateResourceSharePermissionResponse] = dataclasses.field(default=None)
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_arn_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
