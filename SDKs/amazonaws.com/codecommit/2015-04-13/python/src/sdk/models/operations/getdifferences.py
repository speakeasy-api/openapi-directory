import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdifferencesinput as shared_getdifferencesinput
from ..shared import getdifferencesoutput as shared_getdifferencesoutput


@dataclasses.dataclass
class GetDifferencesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetDifferencesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_DIFFERENCES = "CodeCommit_20150413.GetDifferences"


@dataclasses.dataclass
class GetDifferencesHeaders:
    x_amz_target: GetDifferencesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDifferencesRequest:
    headers: GetDifferencesHeaders = dataclasses.field()
    query_params: GetDifferencesQueryParams = dataclasses.field()
    request: shared_getdifferencesinput.GetDifferencesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDifferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    commit_required_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    get_differences_output: Optional[shared_getdifferencesoutput.GetDifferencesOutput] = dataclasses.field(default=None)
    invalid_commit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_commit_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_max_results_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_path_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    path_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    
