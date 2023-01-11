import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizerdescription as shared_authorizerdescription


@dataclass_json
@dataclasses.dataclass
class DescribeDefaultAuthorizerResponse:
    authorizer_description: Optional[shared_authorizerdescription.AuthorizerDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerDescription') }})
    
