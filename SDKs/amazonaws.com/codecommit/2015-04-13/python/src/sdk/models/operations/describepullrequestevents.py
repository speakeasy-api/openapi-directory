import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describepullrequesteventsinput as shared_describepullrequesteventsinput
from ..shared import describepullrequesteventsoutput as shared_describepullrequesteventsoutput


@dataclasses.dataclass
class DescribePullRequestEventsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribePullRequestEventsXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DESCRIBE_PULL_REQUEST_EVENTS = "CodeCommit_20150413.DescribePullRequestEvents"


@dataclasses.dataclass
class DescribePullRequestEventsHeaders:
    x_amz_target: DescribePullRequestEventsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribePullRequestEventsRequest:
    headers: DescribePullRequestEventsHeaders = dataclasses.field()
    query_params: DescribePullRequestEventsQueryParams = dataclasses.field()
    request: shared_describepullrequesteventsinput.DescribePullRequestEventsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribePullRequestEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actor_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    describe_pull_request_events_output: Optional[shared_describepullrequesteventsoutput.DescribePullRequestEventsOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_actor_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_max_results_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_event_type_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    
