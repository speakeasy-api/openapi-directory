import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchdisassociateuserstackrequest as shared_batchdisassociateuserstackrequest
from ..shared import batchdisassociateuserstackresult as shared_batchdisassociateuserstackresult

class BatchDisassociateUserStackXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_BATCH_DISASSOCIATE_USER_STACK = "PhotonAdminProxyService.BatchDisassociateUserStack"


@dataclasses.dataclass
class BatchDisassociateUserStackHeaders:
    x_amz_target: BatchDisassociateUserStackXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchDisassociateUserStackRequest:
    headers: BatchDisassociateUserStackHeaders = dataclasses.field()
    request: shared_batchdisassociateuserstackrequest.BatchDisassociateUserStackRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchDisassociateUserStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_disassociate_user_stack_result: Optional[shared_batchdisassociateuserstackresult.BatchDisassociateUserStackResult] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    
