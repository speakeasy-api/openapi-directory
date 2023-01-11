import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deregisterwebhookwiththirdpartyinput as shared_deregisterwebhookwiththirdpartyinput

class DeregisterWebhookWithThirdPartyXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_DEREGISTER_WEBHOOK_WITH_THIRD_PARTY = "CodePipeline_20150709.DeregisterWebhookWithThirdParty"


@dataclasses.dataclass
class DeregisterWebhookWithThirdPartyHeaders:
    x_amz_target: DeregisterWebhookWithThirdPartyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeregisterWebhookWithThirdPartyRequest:
    headers: DeregisterWebhookWithThirdPartyHeaders = dataclasses.field()
    request: shared_deregisterwebhookwiththirdpartyinput.DeregisterWebhookWithThirdPartyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeregisterWebhookWithThirdPartyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deregister_webhook_with_third_party_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    webhook_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
