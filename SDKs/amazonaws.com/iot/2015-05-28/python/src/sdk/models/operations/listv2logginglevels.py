import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listv2logginglevelsresponse as shared_listv2logginglevelsresponse

class ListV2LoggingLevelsTargetTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    THING_GROUP = "THING_GROUP"


@dataclasses.dataclass
class ListV2LoggingLevelsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    target_type: Optional[ListV2LoggingLevelsTargetTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListV2LoggingLevelsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListV2LoggingLevelsRequest:
    headers: ListV2LoggingLevelsHeaders = dataclasses.field()
    query_params: ListV2LoggingLevelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListV2LoggingLevelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_v2_logging_levels_response: Optional[shared_listv2logginglevelsresponse.ListV2LoggingLevelsResponse] = dataclasses.field(default=None)
    not_configured_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
