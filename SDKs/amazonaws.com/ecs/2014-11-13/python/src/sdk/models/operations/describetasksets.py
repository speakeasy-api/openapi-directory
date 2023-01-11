import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describetasksetsrequest as shared_describetasksetsrequest
from ..shared import describetasksetsresponse as shared_describetasksetsresponse

class DescribeTaskSetsXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_DESCRIBE_TASK_SETS = "AmazonEC2ContainerServiceV20141113.DescribeTaskSets"


@dataclasses.dataclass
class DescribeTaskSetsHeaders:
    x_amz_target: DescribeTaskSetsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeTaskSetsRequest:
    headers: DescribeTaskSetsHeaders = dataclasses.field()
    request: shared_describetasksetsrequest.DescribeTaskSetsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeTaskSetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    client_exception: Optional[Any] = dataclasses.field(default=None)
    cluster_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    describe_task_sets_response: Optional[shared_describetasksetsresponse.DescribeTaskSetsResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    service_not_active_exception: Optional[Any] = dataclasses.field(default=None)
    service_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_feature_exception: Optional[Any] = dataclasses.field(default=None)
    
