import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3destination as shared_s3destination


@dataclass_json
@dataclasses.dataclass
class Destination:
    r"""Destination
    Describes the location of the updated firmware.
    """
    
    s3_destination: Optional[shared_s3destination.S3Destination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Destination') }})
    
