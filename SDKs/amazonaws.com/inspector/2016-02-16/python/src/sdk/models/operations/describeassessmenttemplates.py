import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeassessmenttemplatesrequest as shared_describeassessmenttemplatesrequest
from ..shared import describeassessmenttemplatesresponse as shared_describeassessmenttemplatesresponse

class DescribeAssessmentTemplatesXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_ASSESSMENT_TEMPLATES = "InspectorService.DescribeAssessmentTemplates"


@dataclasses.dataclass
class DescribeAssessmentTemplatesHeaders:
    x_amz_target: DescribeAssessmentTemplatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAssessmentTemplatesRequest:
    headers: DescribeAssessmentTemplatesHeaders = dataclasses.field()
    request: shared_describeassessmenttemplatesrequest.DescribeAssessmentTemplatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeAssessmentTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_assessment_templates_response: Optional[shared_describeassessmenttemplatesresponse.DescribeAssessmentTemplatesResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
