import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeapplicationsnapshotrequest as shared_describeapplicationsnapshotrequest
from ..shared import describeapplicationsnapshotresponse as shared_describeapplicationsnapshotresponse

class DescribeApplicationSnapshotXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_DESCRIBE_APPLICATION_SNAPSHOT = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"


@dataclasses.dataclass
class DescribeApplicationSnapshotHeaders:
    x_amz_target: DescribeApplicationSnapshotXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeApplicationSnapshotRequest:
    headers: DescribeApplicationSnapshotHeaders = dataclasses.field()
    request: shared_describeapplicationsnapshotrequest.DescribeApplicationSnapshotRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeApplicationSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_application_snapshot_response: Optional[shared_describeapplicationsnapshotresponse.DescribeApplicationSnapshotResponse] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
