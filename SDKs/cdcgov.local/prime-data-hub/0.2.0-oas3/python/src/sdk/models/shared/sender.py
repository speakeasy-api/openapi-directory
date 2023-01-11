import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingmetadata as shared_settingmetadata

class SenderFormatEnum(str, Enum):
    CSV = "CSV"


@dataclass_json
@dataclasses.dataclass
class Sender:
    r"""Sender
    An sender of reports to the data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    format: SenderFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    meta: Optional[shared_settingmetadata.SettingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    organization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    

@dataclass_json
@dataclasses.dataclass
class SenderInput:
    r"""SenderInput
    An sender of reports to the data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    format: SenderFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
