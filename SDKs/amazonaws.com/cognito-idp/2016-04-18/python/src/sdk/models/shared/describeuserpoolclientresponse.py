import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpoolclienttype as shared_userpoolclienttype


@dataclass_json
@dataclasses.dataclass
class DescribeUserPoolClientResponse:
    r"""DescribeUserPoolClientResponse
    Represents the response from the server from a request to describe the user pool client.
    """
    
    user_pool_client: Optional[shared_userpoolclienttype.UserPoolClientType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClient') }})
    
