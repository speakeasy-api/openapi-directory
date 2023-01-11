import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disassociateclientdevicefromcoredeviceentry as shared_disassociateclientdevicefromcoredeviceentry
from ..shared import batchdisassociateclientdevicefromcoredeviceresponse as shared_batchdisassociateclientdevicefromcoredeviceresponse


@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDevicePathParams:
    core_device_thing_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'coreDeviceThingName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDeviceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDeviceRequestBody:
    entries: Optional[list[shared_disassociateclientdevicefromcoredeviceentry.DisassociateClientDeviceFromCoreDeviceEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    

@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDeviceRequest:
    headers: BatchDisassociateClientDeviceFromCoreDeviceHeaders = dataclasses.field()
    path_params: BatchDisassociateClientDeviceFromCoreDevicePathParams = dataclasses.field()
    request: BatchDisassociateClientDeviceFromCoreDeviceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    batch_disassociate_client_device_from_core_device_response: Optional[shared_batchdisassociateclientdevicefromcoredeviceresponse.BatchDisassociateClientDeviceFromCoreDeviceResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
