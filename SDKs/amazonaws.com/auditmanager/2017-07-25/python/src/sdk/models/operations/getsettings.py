import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getsettingsresponse as shared_getsettingsresponse

class GetSettingsAttributeEnum(str, Enum):
    ALL = "ALL"
    IS_AWS_ORG_ENABLED = "IS_AWS_ORG_ENABLED"
    SNS_TOPIC = "SNS_TOPIC"
    DEFAULT_ASSESSMENT_REPORTS_DESTINATION = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
    DEFAULT_PROCESS_OWNERS = "DEFAULT_PROCESS_OWNERS"


@dataclasses.dataclass
class GetSettingsPathParams:
    attribute: GetSettingsAttributeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'attribute', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsRequest:
    headers: GetSettingsHeaders = dataclasses.field()
    path_params: GetSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_settings_response: Optional[shared_getsettingsresponse.GetSettingsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    
