import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributetype as shared_attributetype


@dataclass_json
@dataclasses.dataclass
class AdminUpdateUserAttributesRequest:
    r"""AdminUpdateUserAttributesRequest
    Represents the request to update the user's attributes as an administrator.
    """
    
    user_attributes: list[shared_attributetype.AttributeType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    
