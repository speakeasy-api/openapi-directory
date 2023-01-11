import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScoreRevisionCreationDataEncodingEnum(str, Enum):
    BASE64 = "base64"


@dataclass_json
@dataclasses.dataclass
class ScoreRevisionCreation:
    r"""ScoreRevisionCreation
    A new created revision
    """
    
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    autosave: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autosave') }})
    data_encoding: Optional[ScoreRevisionCreationDataEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataEncoding') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
