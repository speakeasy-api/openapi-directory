import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import rebootnoderequest as shared_rebootnoderequest
from ..shared import rebootnoderesponse as shared_rebootnoderesponse

class RebootNodeXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_REBOOT_NODE = "AmazonDAXV3.RebootNode"


@dataclasses.dataclass
class RebootNodeHeaders:
    x_amz_target: RebootNodeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RebootNodeRequest:
    headers: RebootNodeHeaders = dataclasses.field()
    request: shared_rebootnoderequest.RebootNodeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RebootNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_cluster_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    node_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    reboot_node_response: Optional[shared_rebootnoderesponse.RebootNodeResponse] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
