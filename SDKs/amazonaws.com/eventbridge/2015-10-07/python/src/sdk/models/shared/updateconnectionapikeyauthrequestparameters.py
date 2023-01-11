import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionAPIKeyAuthRequestParameters:
    r"""UpdateConnectionAPIKeyAuthRequestParameters
    Contains the API key authorization parameters to use to update the connection.
    """
    
    api_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyName') }})
    api_key_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyValue') }})
    
