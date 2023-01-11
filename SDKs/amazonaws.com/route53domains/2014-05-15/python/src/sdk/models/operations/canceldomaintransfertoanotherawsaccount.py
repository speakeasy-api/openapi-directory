import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import canceldomaintransfertoanotherawsaccountrequest as shared_canceldomaintransfertoanotherawsaccountrequest
from ..shared import canceldomaintransfertoanotherawsaccountresponse as shared_canceldomaintransfertoanotherawsaccountresponse

class CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"


@dataclasses.dataclass
class CancelDomainTransferToAnotherAwsAccountHeaders:
    x_amz_target: CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelDomainTransferToAnotherAwsAccountRequest:
    headers: CancelDomainTransferToAnotherAwsAccountHeaders = dataclasses.field()
    request: shared_canceldomaintransfertoanotherawsaccountrequest.CancelDomainTransferToAnotherAwsAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CancelDomainTransferToAnotherAwsAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cancel_domain_transfer_to_another_aws_account_response: Optional[shared_canceldomaintransfertoanotherawsaccountresponse.CancelDomainTransferToAnotherAwsAccountResponse] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    operation_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    
