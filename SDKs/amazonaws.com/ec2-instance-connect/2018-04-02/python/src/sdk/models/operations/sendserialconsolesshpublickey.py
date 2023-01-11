import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import sendserialconsolesshpublickeyrequest as shared_sendserialconsolesshpublickeyrequest
from ..shared import sendserialconsolesshpublickeyresponse as shared_sendserialconsolesshpublickeyresponse

class SendSerialConsoleSSHPublicKeyXAmzTargetEnum(str, Enum):
    AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SERIAL_CONSOLE_SSH_PUBLIC_KEY = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"


@dataclasses.dataclass
class SendSerialConsoleSSHPublicKeyHeaders:
    x_amz_target: SendSerialConsoleSSHPublicKeyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendSerialConsoleSSHPublicKeyRequest:
    headers: SendSerialConsoleSSHPublicKeyHeaders = dataclasses.field()
    request: shared_sendserialconsolesshpublickeyrequest.SendSerialConsoleSSHPublicKeyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendSerialConsoleSSHPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth_exception: Optional[Any] = dataclasses.field(default=None)
    ec2_instance_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    ec2_instance_type_invalid_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_args_exception: Optional[Any] = dataclasses.field(default=None)
    send_serial_console_ssh_public_key_response: Optional[shared_sendserialconsolesshpublickeyresponse.SendSerialConsoleSSHPublicKeyResponse] = dataclasses.field(default=None)
    serial_console_access_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    serial_console_session_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    serial_console_session_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
