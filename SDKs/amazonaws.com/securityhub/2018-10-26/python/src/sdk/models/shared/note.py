import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Note:
    r"""Note
    A user-defined note added to a finding.
    """
    
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    updated_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedBy') }})
    
