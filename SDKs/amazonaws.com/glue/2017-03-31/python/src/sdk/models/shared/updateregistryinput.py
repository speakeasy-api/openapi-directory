import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registryid as shared_registryid


@dataclass_json
@dataclasses.dataclass
class UpdateRegistryInput:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    registry_id: shared_registryid.RegistryID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryId') }})
    
