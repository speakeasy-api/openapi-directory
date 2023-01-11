import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactstate_enum as shared_artifactstate_enum


@dataclass_json
@dataclasses.dataclass
class UpdateState:
    state: shared_artifactstate_enum.ArtifactStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
