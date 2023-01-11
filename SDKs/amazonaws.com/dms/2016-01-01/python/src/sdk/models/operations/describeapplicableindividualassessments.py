import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeapplicableindividualassessmentsmessage as shared_describeapplicableindividualassessmentsmessage
from ..shared import describeapplicableindividualassessmentsresponse as shared_describeapplicableindividualassessmentsresponse


@dataclasses.dataclass
class DescribeApplicableIndividualAssessmentsQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeApplicableIndividualAssessmentsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"


@dataclasses.dataclass
class DescribeApplicableIndividualAssessmentsHeaders:
    x_amz_target: DescribeApplicableIndividualAssessmentsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeApplicableIndividualAssessmentsRequest:
    headers: DescribeApplicableIndividualAssessmentsHeaders = dataclasses.field()
    query_params: DescribeApplicableIndividualAssessmentsQueryParams = dataclasses.field()
    request: shared_describeapplicableindividualassessmentsmessage.DescribeApplicableIndividualAssessmentsMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeApplicableIndividualAssessmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    describe_applicable_individual_assessments_response: Optional[shared_describeapplicableindividualassessmentsresponse.DescribeApplicableIndividualAssessmentsResponse] = dataclasses.field(default=None)
    invalid_resource_state_fault: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
