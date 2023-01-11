import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteprofileobjectresponse as shared_deleteprofileobjectresponse


@dataclasses.dataclass
class DeleteProfileObjectPathParams:
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProfileObjectHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteProfileObjectRequestBody:
    object_type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectTypeName') }})
    profile_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileId') }})
    profile_object_unique_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileObjectUniqueKey') }})
    

@dataclasses.dataclass
class DeleteProfileObjectRequest:
    headers: DeleteProfileObjectHeaders = dataclasses.field()
    path_params: DeleteProfileObjectPathParams = dataclasses.field()
    request: DeleteProfileObjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteProfileObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    delete_profile_object_response: Optional[shared_deleteprofileobjectresponse.DeleteProfileObjectResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
