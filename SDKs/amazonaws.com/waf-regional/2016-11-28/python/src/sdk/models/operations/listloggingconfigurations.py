import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listloggingconfigurationsrequest as shared_listloggingconfigurationsrequest
from ..shared import listloggingconfigurationsresponse as shared_listloggingconfigurationsresponse

class ListLoggingConfigurationsXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_LIST_LOGGING_CONFIGURATIONS = "AWSWAF_Regional_20161128.ListLoggingConfigurations"


@dataclasses.dataclass
class ListLoggingConfigurationsHeaders:
    x_amz_target: ListLoggingConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLoggingConfigurationsRequest:
    headers: ListLoggingConfigurationsHeaders = dataclasses.field()
    request: shared_listloggingconfigurationsrequest.ListLoggingConfigurationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListLoggingConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_logging_configurations_response: Optional[shared_listloggingconfigurationsresponse.ListLoggingConfigurationsResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    
