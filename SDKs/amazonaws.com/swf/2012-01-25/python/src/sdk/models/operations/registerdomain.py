import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registerdomaininput as shared_registerdomaininput

class RegisterDomainXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REGISTER_DOMAIN = "SimpleWorkflowService.RegisterDomain"


@dataclasses.dataclass
class RegisterDomainHeaders:
    x_amz_target: RegisterDomainXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterDomainRequest:
    headers: RegisterDomainHeaders = dataclasses.field()
    request: shared_registerdomaininput.RegisterDomainInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domain_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    too_many_tags_fault: Optional[Any] = dataclasses.field(default=None)
    
