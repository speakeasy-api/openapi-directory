import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listregexpatternsetsrequest as shared_listregexpatternsetsrequest
from ..shared import listregexpatternsetsresponse as shared_listregexpatternsetsresponse

class ListRegexPatternSetsXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_LIST_REGEX_PATTERN_SETS = "AWSWAF_20150824.ListRegexPatternSets"


@dataclasses.dataclass
class ListRegexPatternSetsHeaders:
    x_amz_target: ListRegexPatternSetsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRegexPatternSetsRequest:
    headers: ListRegexPatternSetsHeaders = dataclasses.field()
    request: shared_listregexpatternsetsrequest.ListRegexPatternSetsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRegexPatternSetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_regex_pattern_sets_response: Optional[shared_listregexpatternsetsresponse.ListRegexPatternSetsResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    
