import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsmetadatatype as shared_analyticsmetadatatype
from ..shared import attributetype as shared_attributetype
from ..shared import usercontextdatatype as shared_usercontextdatatype


@dataclass_json
@dataclasses.dataclass
class SignUpRequest:
    r"""SignUpRequest
    Represents the request to register a user.
    """
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    analytics_metadata: Optional[shared_analyticsmetadatatype.AnalyticsMetadataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    secret_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretHash') }})
    user_attributes: Optional[list[shared_attributetype.AttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    user_context_data: Optional[shared_usercontextdatatype.UserContextDataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    validation_data: Optional[list[shared_attributetype.AttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationData') }})
    
