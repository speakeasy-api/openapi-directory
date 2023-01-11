import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alias as shared_alias


@dataclass_json
@dataclasses.dataclass
class UpdateAliasOutput:
    r"""UpdateAliasOutput
    Represents the returned data in response to a request operation.
    """
    
    alias: Optional[shared_alias.Alias] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    
