import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtaskdefinitionsrequest as shared_listtaskdefinitionsrequest
from ..shared import listtaskdefinitionsresponse as shared_listtaskdefinitionsresponse


@dataclasses.dataclass
class ListTaskDefinitionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListTaskDefinitionsXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITIONS = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"


@dataclasses.dataclass
class ListTaskDefinitionsHeaders:
    x_amz_target: ListTaskDefinitionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTaskDefinitionsRequest:
    headers: ListTaskDefinitionsHeaders = dataclasses.field()
    query_params: ListTaskDefinitionsQueryParams = dataclasses.field()
    request: shared_listtaskdefinitionsrequest.ListTaskDefinitionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTaskDefinitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    list_task_definitions_response: Optional[shared_listtaskdefinitionsresponse.ListTaskDefinitionsResponse] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
