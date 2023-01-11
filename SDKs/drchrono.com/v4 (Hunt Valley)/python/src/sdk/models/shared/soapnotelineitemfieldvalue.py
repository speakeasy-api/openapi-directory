import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SoapNoteLineItemFieldValue:
    r"""SoapNoteLineItemFieldValue
    Values entered by doctor when charting a particular appointment
    """
    
    appointment: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    clinical_note_field: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clinical_note_field') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
