import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DestinationDefinitionUpdate:
    destination_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    docker_image_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImageTag') }})
    
