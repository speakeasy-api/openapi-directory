import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createtransitvirtualinterfacerequest as shared_createtransitvirtualinterfacerequest
from ..shared import createtransitvirtualinterfaceresult as shared_createtransitvirtualinterfaceresult

class CreateTransitVirtualInterfaceXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.CreateTransitVirtualInterface"


@dataclasses.dataclass
class CreateTransitVirtualInterfaceHeaders:
    x_amz_target: CreateTransitVirtualInterfaceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTransitVirtualInterfaceRequest:
    headers: CreateTransitVirtualInterfaceHeaders = dataclasses.field()
    request: shared_createtransitvirtualinterfacerequest.CreateTransitVirtualInterfaceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTransitVirtualInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_transit_virtual_interface_result: Optional[shared_createtransitvirtualinterfaceresult.CreateTransitVirtualInterfaceResult] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    duplicate_tag_keys_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_tags_exception: Optional[Any] = dataclasses.field(default=None)
    
