import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listrepositoriesinput as shared_listrepositoriesinput
from ..shared import listrepositoriesoutput as shared_listrepositoriesoutput


@dataclasses.dataclass
class ListRepositoriesQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_REPOSITORIES = "CodeCommit_20150413.ListRepositories"


@dataclasses.dataclass
class ListRepositoriesHeaders:
    x_amz_target: ListRepositoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRepositoriesRequest:
    headers: ListRepositoriesHeaders = dataclasses.field()
    query_params: ListRepositoriesQueryParams = dataclasses.field()
    request: shared_listrepositoriesinput.ListRepositoriesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_order_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sort_by_exception: Optional[Any] = dataclasses.field(default=None)
    list_repositories_output: Optional[shared_listrepositoriesoutput.ListRepositoriesOutput] = dataclasses.field(default=None)
    
