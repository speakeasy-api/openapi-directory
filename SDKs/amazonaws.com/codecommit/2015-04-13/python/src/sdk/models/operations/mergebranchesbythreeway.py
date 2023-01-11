import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import mergebranchesbythreewayinput as shared_mergebranchesbythreewayinput
from ..shared import mergebranchesbythreewayoutput as shared_mergebranchesbythreewayoutput

class MergeBranchesByThreeWayXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_MERGE_BRANCHES_BY_THREE_WAY = "CodeCommit_20150413.MergeBranchesByThreeWay"


@dataclasses.dataclass
class MergeBranchesByThreeWayHeaders:
    x_amz_target: MergeBranchesByThreeWayXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MergeBranchesByThreeWayRequest:
    headers: MergeBranchesByThreeWayHeaders = dataclasses.field()
    request: shared_mergebranchesbythreewayinput.MergeBranchesByThreeWayInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MergeBranchesByThreeWayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branch_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_is_tag_name_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    commit_message_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    commit_required_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_reference_update_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    file_content_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    file_mode_required_exception: Optional[Any] = dataclasses.field(default=None)
    folder_content_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_branch_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_commit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_conflict_detail_level_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_conflict_resolution_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_conflict_resolution_strategy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_email_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_file_mode_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_path_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_replacement_content_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_replacement_type_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_branch_exception: Optional[Any] = dataclasses.field(default=None)
    manual_merge_required_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_conflict_resolution_entries_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_file_content_to_load_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_items_to_compare_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    merge_branches_by_three_way_output: Optional[shared_mergebranchesbythreewayoutput.MergeBranchesByThreeWayOutput] = dataclasses.field(default=None)
    multiple_conflict_resolution_entries_exception: Optional[Any] = dataclasses.field(default=None)
    name_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    path_required_exception: Optional[Any] = dataclasses.field(default=None)
    replacement_content_required_exception: Optional[Any] = dataclasses.field(default=None)
    replacement_type_required_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
