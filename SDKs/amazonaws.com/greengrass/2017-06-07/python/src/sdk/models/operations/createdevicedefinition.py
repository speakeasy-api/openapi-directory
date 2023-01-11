import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device
from ..shared import createdevicedefinitionresponse as shared_createdevicedefinitionresponse


@dataclasses.dataclass
class CreateDeviceDefinitionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeviceDefinitionRequestBodyInitialVersion:
    r"""CreateDeviceDefinitionRequestBodyInitialVersion
    Information about a device definition version.
    """
    
    devices: Optional[list[shared_device.Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeviceDefinitionRequestBody:
    initial_version: Optional[CreateDeviceDefinitionRequestBodyInitialVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateDeviceDefinitionRequest:
    headers: CreateDeviceDefinitionHeaders = dataclasses.field()
    request: CreateDeviceDefinitionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeviceDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_device_definition_response: Optional[shared_createdevicedefinitionresponse.CreateDeviceDefinitionResponse] = dataclasses.field(default=None)
    
