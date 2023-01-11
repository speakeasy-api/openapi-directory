import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import confirmtransitvirtualinterfacerequest as shared_confirmtransitvirtualinterfacerequest
from ..shared import confirmtransitvirtualinterfaceresponse as shared_confirmtransitvirtualinterfaceresponse

class ConfirmTransitVirtualInterfaceXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.ConfirmTransitVirtualInterface"


@dataclasses.dataclass
class ConfirmTransitVirtualInterfaceHeaders:
    x_amz_target: ConfirmTransitVirtualInterfaceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfirmTransitVirtualInterfaceRequest:
    headers: ConfirmTransitVirtualInterfaceHeaders = dataclasses.field()
    request: shared_confirmtransitvirtualinterfacerequest.ConfirmTransitVirtualInterfaceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfirmTransitVirtualInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    confirm_transit_virtual_interface_response: Optional[shared_confirmtransitvirtualinterfaceresponse.ConfirmTransitVirtualInterfaceResponse] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
