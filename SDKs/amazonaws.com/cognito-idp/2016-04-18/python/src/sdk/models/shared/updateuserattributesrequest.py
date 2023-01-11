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
class UpdateUserAttributesRequest:
    r"""UpdateUserAttributesRequest
    Represents the request to update user attributes.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    user_attributes: list[shared_attributetype.AttributeType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    
