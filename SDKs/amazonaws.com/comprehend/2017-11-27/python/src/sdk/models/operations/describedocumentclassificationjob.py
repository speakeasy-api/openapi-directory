import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describedocumentclassificationjobrequest as shared_describedocumentclassificationjobrequest
from ..shared import describedocumentclassificationjobresponse as shared_describedocumentclassificationjobresponse

class DescribeDocumentClassificationJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB = "Comprehend_20171127.DescribeDocumentClassificationJob"


@dataclasses.dataclass
class DescribeDocumentClassificationJobHeaders:
    x_amz_target: DescribeDocumentClassificationJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeDocumentClassificationJobRequest:
    headers: DescribeDocumentClassificationJobHeaders = dataclasses.field()
    request: shared_describedocumentclassificationjobrequest.DescribeDocumentClassificationJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeDocumentClassificationJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_document_classification_job_response: Optional[shared_describedocumentclassificationjobresponse.DescribeDocumentClassificationJobResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
