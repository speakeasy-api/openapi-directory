import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletedirectconnectgatewayassociationproposalrequest as shared_deletedirectconnectgatewayassociationproposalrequest
from ..shared import deletedirectconnectgatewayassociationproposalresult as shared_deletedirectconnectgatewayassociationproposalresult

class DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"


@dataclasses.dataclass
class DeleteDirectConnectGatewayAssociationProposalHeaders:
    x_amz_target: DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDirectConnectGatewayAssociationProposalRequest:
    headers: DeleteDirectConnectGatewayAssociationProposalHeaders = dataclasses.field()
    request: shared_deletedirectconnectgatewayassociationproposalrequest.DeleteDirectConnectGatewayAssociationProposalRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteDirectConnectGatewayAssociationProposalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_direct_connect_gateway_association_proposal_result: Optional[shared_deletedirectconnectgatewayassociationproposalresult.DeleteDirectConnectGatewayAssociationProposalResult] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
