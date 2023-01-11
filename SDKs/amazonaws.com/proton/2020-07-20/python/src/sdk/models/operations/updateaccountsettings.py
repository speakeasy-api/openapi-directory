import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateaccountsettingsinput as shared_updateaccountsettingsinput
from ..shared import updateaccountsettingsoutput as shared_updateaccountsettingsoutput

class UpdateAccountSettingsXAmzTargetEnum(str, Enum):
    AWS_PROTON20200720_UPDATE_ACCOUNT_SETTINGS = "AwsProton20200720.UpdateAccountSettings"


@dataclasses.dataclass
class UpdateAccountSettingsHeaders:
    x_amz_target: UpdateAccountSettingsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccountSettingsRequest:
    headers: UpdateAccountSettingsHeaders = dataclasses.field()
    request: shared_updateaccountsettingsinput.UpdateAccountSettingsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAccountSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_account_settings_output: Optional[shared_updateaccountsettingsoutput.UpdateAccountSettingsOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
