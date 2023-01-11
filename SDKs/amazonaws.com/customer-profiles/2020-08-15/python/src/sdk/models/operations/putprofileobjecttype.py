import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objecttypefield as shared_objecttypefield
from ..shared import objecttypekey as shared_objecttypekey
from ..shared import putprofileobjecttyperesponse as shared_putprofileobjecttyperesponse


@dataclasses.dataclass
class PutProfileObjectTypePathParams:
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    object_type_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ObjectTypeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutProfileObjectTypeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutProfileObjectTypeRequestBody:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    allow_profile_creation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowProfileCreation') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    expiration_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDays') }})
    fields: Optional[dict[str, shared_objecttypefield.ObjectTypeField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fields') }})
    keys: Optional[dict[str, list[shared_objecttypekey.ObjectTypeKey]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    

@dataclasses.dataclass
class PutProfileObjectTypeRequest:
    headers: PutProfileObjectTypeHeaders = dataclasses.field()
    path_params: PutProfileObjectTypePathParams = dataclasses.field()
    request: PutProfileObjectTypeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutProfileObjectTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    put_profile_object_type_response: Optional[shared_putprofileobjecttyperesponse.PutProfileObjectTypeResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
