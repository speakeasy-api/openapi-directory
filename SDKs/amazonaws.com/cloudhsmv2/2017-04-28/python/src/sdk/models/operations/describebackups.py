import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describebackupsrequest as shared_describebackupsrequest
from ..shared import describebackupsresponse as shared_describebackupsresponse


@dataclasses.dataclass
class DescribeBackupsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBackupsXAmzTargetEnum(str, Enum):
    BALDR_API_SERVICE_DESCRIBE_BACKUPS = "BaldrApiService.DescribeBackups"


@dataclasses.dataclass
class DescribeBackupsHeaders:
    x_amz_target: DescribeBackupsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeBackupsRequest:
    headers: DescribeBackupsHeaders = dataclasses.field()
    query_params: DescribeBackupsQueryParams = dataclasses.field()
    request: shared_describebackupsrequest.DescribeBackupsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeBackupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_hsm_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_service_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_tag_exception: Optional[Any] = dataclasses.field(default=None)
    describe_backups_response: Optional[shared_describebackupsresponse.DescribeBackupsResponse] = dataclasses.field(default=None)
    
