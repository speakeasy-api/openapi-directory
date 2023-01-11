import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsmetadatatype as shared_analyticsmetadatatype
from ..shared import usercontextdatatype as shared_usercontextdatatype


@dataclass_json
@dataclasses.dataclass
class ConfirmForgotPasswordRequest:
    r"""ConfirmForgotPasswordRequest
    The request representing the confirmation for a password reset.
    """
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    confirmation_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfirmationCode') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    analytics_metadata: Optional[shared_analyticsmetadatatype.AnalyticsMetadataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    secret_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretHash') }})
    user_context_data: Optional[shared_usercontextdatatype.UserContextDataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    
