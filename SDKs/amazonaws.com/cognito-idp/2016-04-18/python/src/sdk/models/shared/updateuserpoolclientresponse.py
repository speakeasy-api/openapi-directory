import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpoolclienttype as shared_userpoolclienttype


@dataclass_json
@dataclasses.dataclass
class UpdateUserPoolClientResponse:
    r"""UpdateUserPoolClientResponse
    Represents the response from the server to the request to update the user pool client.
    """
    
    user_pool_client: Optional[shared_userpoolclienttype.UserPoolClientType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClient') }})
    
