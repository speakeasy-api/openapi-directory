import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createsqlinjectionmatchsetrequest as shared_createsqlinjectionmatchsetrequest
from ..shared import createsqlinjectionmatchsetresponse as shared_createsqlinjectionmatchsetresponse

class CreateSQLInjectionMatchSetXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_SQL_INJECTION_MATCH_SET = "AWSWAF_20150824.CreateSqlInjectionMatchSet"


@dataclasses.dataclass
class CreateSQLInjectionMatchSetHeaders:
    x_amz_target: CreateSQLInjectionMatchSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSQLInjectionMatchSetRequest:
    headers: CreateSQLInjectionMatchSetHeaders = dataclasses.field()
    request: shared_createsqlinjectionmatchsetrequest.CreateSQLInjectionMatchSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSQLInjectionMatchSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_sql_injection_match_set_response: Optional[shared_createsqlinjectionmatchsetresponse.CreateSQLInjectionMatchSetResponse] = dataclasses.field(default=None)
    waf_disallowed_name_exception: Optional[Any] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    
