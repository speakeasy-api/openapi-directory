import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getregexmatchsetrequest as shared_getregexmatchsetrequest
from ..shared import getregexmatchsetresponse as shared_getregexmatchsetresponse

class GetRegexMatchSetXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_GET_REGEX_MATCH_SET = "AWSWAF_Regional_20161128.GetRegexMatchSet"


@dataclasses.dataclass
class GetRegexMatchSetHeaders:
    x_amz_target: GetRegexMatchSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegexMatchSetRequest:
    headers: GetRegexMatchSetHeaders = dataclasses.field()
    request: shared_getregexmatchsetrequest.GetRegexMatchSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetRegexMatchSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_regex_match_set_response: Optional[shared_getregexmatchsetresponse.GetRegexMatchSetResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    
