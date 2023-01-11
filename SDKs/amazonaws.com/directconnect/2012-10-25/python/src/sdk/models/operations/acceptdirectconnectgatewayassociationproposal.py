import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import acceptdirectconnectgatewayassociationproposalrequest as shared_acceptdirectconnectgatewayassociationproposalrequest
from ..shared import acceptdirectconnectgatewayassociationproposalresult as shared_acceptdirectconnectgatewayassociationproposalresult

class AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"


@dataclasses.dataclass
class AcceptDirectConnectGatewayAssociationProposalHeaders:
    x_amz_target: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcceptDirectConnectGatewayAssociationProposalRequest:
    headers: AcceptDirectConnectGatewayAssociationProposalHeaders = dataclasses.field()
    request: shared_acceptdirectconnectgatewayassociationproposalrequest.AcceptDirectConnectGatewayAssociationProposalRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcceptDirectConnectGatewayAssociationProposalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accept_direct_connect_gateway_association_proposal_result: Optional[shared_acceptdirectconnectgatewayassociationproposalresult.AcceptDirectConnectGatewayAssociationProposalResult] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
