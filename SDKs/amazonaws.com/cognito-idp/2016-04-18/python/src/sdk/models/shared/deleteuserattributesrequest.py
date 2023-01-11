import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteUserAttributesRequest:
    r"""DeleteUserAttributesRequest
    Represents the request to delete user attributes.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    user_attribute_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributeNames') }})
    
