import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getmergeconflictsinput as shared_getmergeconflictsinput
from ..shared import getmergeconflictsoutput as shared_getmergeconflictsoutput


@dataclasses.dataclass
class GetMergeConflictsQueryParams:
    max_conflict_files: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxConflictFiles', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetMergeConflictsXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_MERGE_CONFLICTS = "CodeCommit_20150413.GetMergeConflicts"


@dataclasses.dataclass
class GetMergeConflictsHeaders:
    x_amz_target: GetMergeConflictsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMergeConflictsRequest:
    headers: GetMergeConflictsHeaders = dataclasses.field()
    query_params: GetMergeConflictsQueryParams = dataclasses.field()
    request: shared_getmergeconflictsinput.GetMergeConflictsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetMergeConflictsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    commit_required_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    get_merge_conflicts_output: Optional[shared_getmergeconflictsoutput.GetMergeConflictsOutput] = dataclasses.field(default=None)
    invalid_commit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_conflict_detail_level_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_conflict_resolution_strategy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_destination_commit_specifier_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_max_conflict_files_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_merge_option_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_source_commit_specifier_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_file_content_to_load_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_items_to_compare_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    merge_option_required_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
