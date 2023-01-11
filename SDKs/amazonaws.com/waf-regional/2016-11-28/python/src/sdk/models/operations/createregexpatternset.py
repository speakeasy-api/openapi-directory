import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createregexpatternsetrequest as shared_createregexpatternsetrequest
from ..shared import createregexpatternsetresponse as shared_createregexpatternsetresponse

class CreateRegexPatternSetXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_CREATE_REGEX_PATTERN_SET = "AWSWAF_Regional_20161128.CreateRegexPatternSet"


@dataclasses.dataclass
class CreateRegexPatternSetHeaders:
    x_amz_target: CreateRegexPatternSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRegexPatternSetRequest:
    headers: CreateRegexPatternSetHeaders = dataclasses.field()
    request: shared_createregexpatternsetrequest.CreateRegexPatternSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRegexPatternSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_regex_pattern_set_response: Optional[shared_createregexpatternsetresponse.CreateRegexPatternSetResponse] = dataclasses.field(default=None)
    waf_disallowed_name_exception: Optional[Any] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    
