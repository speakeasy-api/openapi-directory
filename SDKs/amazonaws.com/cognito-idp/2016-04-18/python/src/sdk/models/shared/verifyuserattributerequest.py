import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VerifyUserAttributeRequest:
    r"""VerifyUserAttributeRequest
    Represents the request to verify user attributes.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
