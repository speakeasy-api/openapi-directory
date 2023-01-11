import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listuniqueproblemsrequest as shared_listuniqueproblemsrequest
from ..shared import listuniqueproblemsresult as shared_listuniqueproblemsresult


@dataclasses.dataclass
class ListUniqueProblemsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListUniqueProblemsXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_LIST_UNIQUE_PROBLEMS = "DeviceFarm_20150623.ListUniqueProblems"


@dataclasses.dataclass
class ListUniqueProblemsHeaders:
    x_amz_target: ListUniqueProblemsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUniqueProblemsRequest:
    headers: ListUniqueProblemsHeaders = dataclasses.field()
    query_params: ListUniqueProblemsQueryParams = dataclasses.field()
    request: shared_listuniqueproblemsrequest.ListUniqueProblemsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListUniqueProblemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    argument_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_unique_problems_result: Optional[shared_listuniqueproblemsresult.ListUniqueProblemsResult] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_account_exception: Optional[Any] = dataclasses.field(default=None)
    
