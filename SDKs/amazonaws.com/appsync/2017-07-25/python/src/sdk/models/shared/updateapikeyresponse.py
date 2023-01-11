import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikey as shared_apikey


@dataclass_json
@dataclasses.dataclass
class UpdateAPIKeyResponse:
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    
