import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import acceptdomaintransferfromanotherawsaccountrequest as shared_acceptdomaintransferfromanotherawsaccountrequest
from ..shared import acceptdomaintransferfromanotherawsaccountresponse as shared_acceptdomaintransferfromanotherawsaccountresponse

class AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"


@dataclasses.dataclass
class AcceptDomainTransferFromAnotherAwsAccountHeaders:
    x_amz_target: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcceptDomainTransferFromAnotherAwsAccountRequest:
    headers: AcceptDomainTransferFromAnotherAwsAccountHeaders = dataclasses.field()
    request: shared_acceptdomaintransferfromanotherawsaccountrequest.AcceptDomainTransferFromAnotherAwsAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcceptDomainTransferFromAnotherAwsAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accept_domain_transfer_from_another_aws_account_response: Optional[shared_acceptdomaintransferfromanotherawsaccountresponse.AcceptDomainTransferFromAnotherAwsAccountResponse] = dataclasses.field(default=None)
    domain_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    operation_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    
