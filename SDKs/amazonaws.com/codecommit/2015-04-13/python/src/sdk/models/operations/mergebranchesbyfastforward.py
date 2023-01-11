import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import mergebranchesbyfastforwardinput as shared_mergebranchesbyfastforwardinput
from ..shared import mergebranchesbyfastforwardoutput as shared_mergebranchesbyfastforwardoutput

class MergeBranchesByFastForwardXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_MERGE_BRANCHES_BY_FAST_FORWARD = "CodeCommit_20150413.MergeBranchesByFastForward"


@dataclasses.dataclass
class MergeBranchesByFastForwardHeaders:
    x_amz_target: MergeBranchesByFastForwardXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MergeBranchesByFastForwardRequest:
    headers: MergeBranchesByFastForwardHeaders = dataclasses.field()
    request: shared_mergebranchesbyfastforwardinput.MergeBranchesByFastForwardInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MergeBranchesByFastForwardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branch_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_is_tag_name_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    commit_required_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_reference_update_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_branch_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_commit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_branch_exception: Optional[Any] = dataclasses.field(default=None)
    manual_merge_required_exception: Optional[Any] = dataclasses.field(default=None)
    merge_branches_by_fast_forward_output: Optional[shared_mergebranchesbyfastforwardoutput.MergeBranchesByFastForwardOutput] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
