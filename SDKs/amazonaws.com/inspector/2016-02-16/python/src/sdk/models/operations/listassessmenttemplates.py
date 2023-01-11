import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listassessmenttemplatesrequest as shared_listassessmenttemplatesrequest
from ..shared import listassessmenttemplatesresponse as shared_listassessmenttemplatesresponse


@dataclasses.dataclass
class ListAssessmentTemplatesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListAssessmentTemplatesXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_LIST_ASSESSMENT_TEMPLATES = "InspectorService.ListAssessmentTemplates"


@dataclasses.dataclass
class ListAssessmentTemplatesHeaders:
    x_amz_target: ListAssessmentTemplatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssessmentTemplatesRequest:
    headers: ListAssessmentTemplatesHeaders = dataclasses.field()
    query_params: ListAssessmentTemplatesQueryParams = dataclasses.field()
    request: shared_listassessmenttemplatesrequest.ListAssessmentTemplatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAssessmentTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    list_assessment_templates_response: Optional[shared_listassessmenttemplatesresponse.ListAssessmentTemplatesResponse] = dataclasses.field(default=None)
    no_such_entity_exception: Optional[Any] = dataclasses.field(default=None)
    
