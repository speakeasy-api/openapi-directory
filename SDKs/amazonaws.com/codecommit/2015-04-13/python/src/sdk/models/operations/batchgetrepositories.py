import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetrepositoriesinput as shared_batchgetrepositoriesinput
from ..shared import batchgetrepositoriesoutput as shared_batchgetrepositoriesoutput

class BatchGetRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_BATCH_GET_REPOSITORIES = "CodeCommit_20150413.BatchGetRepositories"


@dataclasses.dataclass
class BatchGetRepositoriesHeaders:
    x_amz_target: BatchGetRepositoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetRepositoriesRequest:
    headers: BatchGetRepositoriesHeaders = dataclasses.field()
    request: shared_batchgetrepositoriesinput.BatchGetRepositoriesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_repositories_output: Optional[shared_batchgetrepositoriesoutput.BatchGetRepositoriesOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_repository_names_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    repository_names_required_exception: Optional[Any] = dataclasses.field(default=None)
    
