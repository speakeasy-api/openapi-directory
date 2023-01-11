import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import severitylabel_enum as shared_severitylabel_enum
from ..shared import workflowstatus_enum as shared_workflowstatus_enum
from ..shared import awssecurityfindingidentifier as shared_awssecurityfindingidentifier
from ..shared import relatedfinding as shared_relatedfinding
from ..shared import batchupdatefindingsresponse as shared_batchupdatefindingsresponse


@dataclasses.dataclass
class BatchUpdateFindingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsRequestBodyNote:
    r"""BatchUpdateFindingsRequestBodyNote
    The updated note.
    """
    
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsRequestBodySeverity:
    r"""BatchUpdateFindingsRequestBodySeverity
    Updates to the severity information for a finding.
    """
    
    label: Optional[shared_severitylabel_enum.SeverityLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    normalized: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Normalized') }})
    product: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Product') }})
    
class BatchUpdateFindingsRequestBodyVerificationStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TRUE_POSITIVE = "TRUE_POSITIVE"
    FALSE_POSITIVE = "FALSE_POSITIVE"
    BENIGN_POSITIVE = "BENIGN_POSITIVE"


@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsRequestBodyWorkflow:
    r"""BatchUpdateFindingsRequestBodyWorkflow
    Used to update information about the investigation into the finding.
    """
    
    status: Optional[shared_workflowstatus_enum.WorkflowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsRequestBody:
    finding_identifiers: list[shared_awssecurityfindingidentifier.AwsSecurityFindingIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingIdentifiers') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    note: Optional[BatchUpdateFindingsRequestBodyNote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    related_findings: Optional[list[shared_relatedfinding.RelatedFinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    severity: Optional[BatchUpdateFindingsRequestBodySeverity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    user_defined_fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[BatchUpdateFindingsRequestBodyVerificationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    workflow: Optional[BatchUpdateFindingsRequestBodyWorkflow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    

@dataclasses.dataclass
class BatchUpdateFindingsRequest:
    headers: BatchUpdateFindingsHeaders = dataclasses.field()
    request: BatchUpdateFindingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchUpdateFindingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_update_findings_response: Optional[shared_batchupdatefindingsresponse.BatchUpdateFindingsResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_access_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
