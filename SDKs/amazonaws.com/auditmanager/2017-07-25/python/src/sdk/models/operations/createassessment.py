import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportdestinationtype_enum as shared_assessmentreportdestinationtype_enum
from ..shared import awsaccount as shared_awsaccount
from ..shared import awsservice as shared_awsservice
from ..shared import role as shared_role
from ..shared import createassessmentresponse as shared_createassessmentresponse


@dataclasses.dataclass
class CreateAssessmentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAssessmentRequestBodyAssessmentReportsDestination:
    r"""CreateAssessmentRequestBodyAssessmentReportsDestination
     The location in which Audit Manager saves assessment reports for the given assessment. 
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_type: Optional[shared_assessmentreportdestinationtype_enum.AssessmentReportDestinationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationType') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAssessmentRequestBodyScope:
    r"""CreateAssessmentRequestBodyScope
     The wrapper that contains the accounts and services in scope for the assessment. 
    """
    
    aws_accounts: Optional[list[shared_awsaccount.AwsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccounts') }})
    aws_services: Optional[list[shared_awsservice.AwsService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsServices') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAssessmentRequestBody:
    assessment_reports_destination: CreateAssessmentRequestBodyAssessmentReportsDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportsDestination') }})
    framework_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameworkId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: list[shared_role.Role] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    scope: CreateAssessmentRequestBodyScope = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateAssessmentRequest:
    headers: CreateAssessmentHeaders = dataclasses.field()
    request: CreateAssessmentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAssessmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_assessment_response: Optional[shared_createassessmentresponse.CreateAssessmentResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
