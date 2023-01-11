import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeimporttasksrequest as shared_describeimporttasksrequest
from ..shared import describeimporttasksresponse as shared_describeimporttasksresponse


@dataclasses.dataclass
class DescribeImportTasksQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeImportTasksXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_DESCRIBE_IMPORT_TASKS = "AWSPoseidonService_V2015_11_01.DescribeImportTasks"


@dataclasses.dataclass
class DescribeImportTasksHeaders:
    x_amz_target: DescribeImportTasksXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeImportTasksRequest:
    headers: DescribeImportTasksHeaders = dataclasses.field()
    query_params: DescribeImportTasksQueryParams = dataclasses.field()
    request: shared_describeimporttasksrequest.DescribeImportTasksRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeImportTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization_error_exception: Optional[Any] = dataclasses.field(default=None)
    describe_import_tasks_response: Optional[shared_describeimporttasksresponse.DescribeImportTasksResponse] = dataclasses.field(default=None)
    home_region_not_set_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
