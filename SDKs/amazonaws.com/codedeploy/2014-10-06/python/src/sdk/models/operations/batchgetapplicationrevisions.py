import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetapplicationrevisionsinput as shared_batchgetapplicationrevisionsinput
from ..shared import batchgetapplicationrevisionsoutput as shared_batchgetapplicationrevisionsoutput

class BatchGetApplicationRevisionsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_APPLICATION_REVISIONS = "CodeDeploy_20141006.BatchGetApplicationRevisions"


@dataclasses.dataclass
class BatchGetApplicationRevisionsHeaders:
    x_amz_target: BatchGetApplicationRevisionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetApplicationRevisionsRequest:
    headers: BatchGetApplicationRevisionsHeaders = dataclasses.field()
    request: shared_batchgetapplicationrevisionsinput.BatchGetApplicationRevisionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetApplicationRevisionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    batch_get_application_revisions_output: Optional[shared_batchgetapplicationrevisionsoutput.BatchGetApplicationRevisionsOutput] = dataclasses.field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_revision_exception: Optional[Any] = dataclasses.field(default=None)
    revision_required_exception: Optional[Any] = dataclasses.field(default=None)
    
