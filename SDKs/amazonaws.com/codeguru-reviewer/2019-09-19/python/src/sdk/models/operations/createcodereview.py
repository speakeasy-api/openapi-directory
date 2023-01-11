import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analysistype_enum as shared_analysistype_enum
from ..shared import repositoryanalysis as shared_repositoryanalysis
from ..shared import createcodereviewresponse as shared_createcodereviewresponse


@dataclasses.dataclass
class CreateCodeReviewHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCodeReviewRequestBodyType:
    r"""CreateCodeReviewRequestBodyType
    <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview\"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
    """
    
    analysis_types: Optional[list[shared_analysistype_enum.AnalysisTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalysisTypes') }})
    repository_analysis: Optional[shared_repositoryanalysis.RepositoryAnalysis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAnalysis') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCodeReviewRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    repository_association_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAssociationArn') }})
    type: CreateCodeReviewRequestBodyType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    

@dataclasses.dataclass
class CreateCodeReviewRequest:
    headers: CreateCodeReviewHeaders = dataclasses.field()
    request: CreateCodeReviewRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCodeReviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_code_review_response: Optional[shared_createcodereviewresponse.CreateCodeReviewResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
