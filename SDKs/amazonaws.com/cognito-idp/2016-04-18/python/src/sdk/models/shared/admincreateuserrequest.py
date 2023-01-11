import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverymediumtype_enum as shared_deliverymediumtype_enum
from ..shared import messageactiontype_enum as shared_messageactiontype_enum
from ..shared import attributetype as shared_attributetype


@dataclass_json
@dataclasses.dataclass
class AdminCreateUserRequest:
    r"""AdminCreateUserRequest
    Represents the request to create a user in the specified user pool.
    """
    
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    desired_delivery_mediums: Optional[list[shared_deliverymediumtype_enum.DeliveryMediumTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredDeliveryMediums') }})
    force_alias_creation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceAliasCreation') }})
    message_action: Optional[shared_messageactiontype_enum.MessageActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageAction') }})
    temporary_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemporaryPassword') }})
    user_attributes: Optional[list[shared_attributetype.AttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    validation_data: Optional[list[shared_attributetype.AttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationData') }})
    
