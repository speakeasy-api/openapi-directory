import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listcomponentbuildversionsresponse as shared_listcomponentbuildversionsresponse


@dataclasses.dataclass
class ListComponentBuildVersionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListComponentBuildVersionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListComponentBuildVersionsRequestBody:
    component_version_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersionArn') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

@dataclasses.dataclass
class ListComponentBuildVersionsRequest:
    headers: ListComponentBuildVersionsHeaders = dataclasses.field()
    query_params: ListComponentBuildVersionsQueryParams = dataclasses.field()
    request: ListComponentBuildVersionsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListComponentBuildVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call_rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    client_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pagination_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_component_build_versions_response: Optional[shared_listcomponentbuildversionsresponse.ListComponentBuildVersionsResponse] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
