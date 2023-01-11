import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validatepolicyresponse as shared_validatepolicyresponse


@dataclasses.dataclass
class ValidatePolicyQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ValidatePolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ValidatePolicyRequestBodyLocaleEnum(str, Enum):
    DE = "DE"
    EN = "EN"
    ES = "ES"
    FR = "FR"
    IT = "IT"
    JA = "JA"
    KO = "KO"
    PT_BR = "PT_BR"
    ZH_CN = "ZH_CN"
    ZH_TW = "ZH_TW"

class ValidatePolicyRequestBodyPolicyTypeEnum(str, Enum):
    IDENTITY_POLICY = "IDENTITY_POLICY"
    RESOURCE_POLICY = "RESOURCE_POLICY"
    SERVICE_CONTROL_POLICY = "SERVICE_CONTROL_POLICY"


@dataclass_json
@dataclasses.dataclass
class ValidatePolicyRequestBody:
    policy_document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDocument') }})
    policy_type: ValidatePolicyRequestBodyPolicyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyType') }})
    locale: Optional[ValidatePolicyRequestBodyLocaleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    

@dataclasses.dataclass
class ValidatePolicyRequest:
    headers: ValidatePolicyHeaders = dataclasses.field()
    query_params: ValidatePolicyQueryParams = dataclasses.field()
    request: ValidatePolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidatePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validate_policy_response: Optional[shared_validatepolicyresponse.ValidatePolicyResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
