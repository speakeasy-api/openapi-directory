import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listlogsubscriptionsrequest as shared_listlogsubscriptionsrequest
from ..shared import listlogsubscriptionsresult as shared_listlogsubscriptionsresult

class ListLogSubscriptionsXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_LIST_LOG_SUBSCRIPTIONS = "DirectoryService_20150416.ListLogSubscriptions"


@dataclasses.dataclass
class ListLogSubscriptionsHeaders:
    x_amz_target: ListLogSubscriptionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLogSubscriptionsRequest:
    headers: ListLogSubscriptionsHeaders = dataclasses.field()
    request: shared_listlogsubscriptionsrequest.ListLogSubscriptionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListLogSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    entity_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_log_subscriptions_result: Optional[shared_listlogsubscriptionsresult.ListLogSubscriptionsResult] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    
