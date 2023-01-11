import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describerepositoriesrequest as shared_describerepositoriesrequest
from ..shared import describerepositoriesresponse as shared_describerepositoriesresponse


@dataclasses.dataclass
class DescribeRepositoriesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeRepositoriesXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_DESCRIBE_REPOSITORIES = "SpencerFrontendService.DescribeRepositories"


@dataclasses.dataclass
class DescribeRepositoriesHeaders:
    x_amz_target: DescribeRepositoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRepositoriesRequest:
    headers: DescribeRepositoriesHeaders = dataclasses.field()
    query_params: DescribeRepositoriesQueryParams = dataclasses.field()
    request: shared_describerepositoriesrequest.DescribeRepositoriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_repositories_response: Optional[shared_describerepositoriesresponse.DescribeRepositoriesResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
