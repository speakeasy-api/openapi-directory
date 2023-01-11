import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatedirectconnectgatewayassociationrequest as shared_updatedirectconnectgatewayassociationrequest
from ..shared import updatedirectconnectgatewayassociationresult as shared_updatedirectconnectgatewayassociationresult

class UpdateDirectConnectGatewayAssociationXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION = "OvertureService.UpdateDirectConnectGatewayAssociation"


@dataclasses.dataclass
class UpdateDirectConnectGatewayAssociationHeaders:
    x_amz_target: UpdateDirectConnectGatewayAssociationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDirectConnectGatewayAssociationRequest:
    headers: UpdateDirectConnectGatewayAssociationHeaders = dataclasses.field()
    request: shared_updatedirectconnectgatewayassociationrequest.UpdateDirectConnectGatewayAssociationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDirectConnectGatewayAssociationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    update_direct_connect_gateway_association_result: Optional[shared_updatedirectconnectgatewayassociationresult.UpdateDirectConnectGatewayAssociationResult] = dataclasses.field(default=None)
    
