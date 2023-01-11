import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceDefinitionUpdate:
    r"""SourceDefinitionUpdate
    Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
    """
    
    docker_image_tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImageTag') }})
    source_definition_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    
