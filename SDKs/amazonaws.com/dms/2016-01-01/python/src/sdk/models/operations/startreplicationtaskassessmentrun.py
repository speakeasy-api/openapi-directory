import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startreplicationtaskassessmentrunmessage as shared_startreplicationtaskassessmentrunmessage
from ..shared import startreplicationtaskassessmentrunresponse as shared_startreplicationtaskassessmentrunresponse

class StartReplicationTaskAssessmentRunXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_START_REPLICATION_TASK_ASSESSMENT_RUN = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"


@dataclasses.dataclass
class StartReplicationTaskAssessmentRunHeaders:
    x_amz_target: StartReplicationTaskAssessmentRunXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartReplicationTaskAssessmentRunRequest:
    headers: StartReplicationTaskAssessmentRunHeaders = dataclasses.field()
    request: shared_startreplicationtaskassessmentrunmessage.StartReplicationTaskAssessmentRunMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartReplicationTaskAssessmentRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_state_fault: Optional[Any] = dataclasses.field(default=None)
    kms_access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    kms_disabled_fault: Optional[Any] = dataclasses.field(default=None)
    kms_fault: Optional[Any] = dataclasses.field(default=None)
    kms_invalid_state_fault: Optional[Any] = dataclasses.field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = dataclasses.field(default=None)
    kms_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    s3_access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    s3_resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    start_replication_task_assessment_run_response: Optional[shared_startreplicationtaskassessmentrunresponse.StartReplicationTaskAssessmentRunResponse] = dataclasses.field(default=None)
    
