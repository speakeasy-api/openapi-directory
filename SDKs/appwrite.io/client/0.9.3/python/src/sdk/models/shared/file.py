import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class File:
    r"""File
    File
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    dollar_permissions: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$permissions') }})
    date_created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    mime_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    signature: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    size_original: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeOriginal') }})
    
