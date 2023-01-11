import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listpartnereventsourceaccountsrequest as shared_listpartnereventsourceaccountsrequest
from ..shared import listpartnereventsourceaccountsresponse as shared_listpartnereventsourceaccountsresponse

class ListPartnerEventSourceAccountsXAmzTargetEnum(str, Enum):
    AWS_EVENTS_LIST_PARTNER_EVENT_SOURCE_ACCOUNTS = "AWSEvents.ListPartnerEventSourceAccounts"


@dataclasses.dataclass
class ListPartnerEventSourceAccountsHeaders:
    x_amz_target: ListPartnerEventSourceAccountsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPartnerEventSourceAccountsRequest:
    headers: ListPartnerEventSourceAccountsHeaders = dataclasses.field()
    request: shared_listpartnereventsourceaccountsrequest.ListPartnerEventSourceAccountsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListPartnerEventSourceAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    list_partner_event_source_accounts_response: Optional[shared_listpartnereventsourceaccountsresponse.ListPartnerEventSourceAccountsResponse] = dataclasses.field(default=None)
    operation_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
