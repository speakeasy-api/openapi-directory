import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclasses.dataclass
class UpdateNotificationRuleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateNotificationRuleRequestBodyDetailTypeEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

class UpdateNotificationRuleRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateNotificationRuleRequestBody:
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    detail_type: Optional[UpdateNotificationRuleRequestBodyDetailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailType') }})
    event_type_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypeIds') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[UpdateNotificationRuleRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    

@dataclasses.dataclass
class UpdateNotificationRuleRequest:
    headers: UpdateNotificationRuleHeaders = dataclasses.field()
    request: UpdateNotificationRuleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNotificationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_notification_rule_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
