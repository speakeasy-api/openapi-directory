import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactstate_enum as shared_artifactstate_enum
from ..shared import artifacttype_enum as shared_artifacttype_enum


@dataclass_json
@dataclasses.dataclass
class ArtifactMetaData:
    created_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    created_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedBy') }})
    modified_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: shared_artifactstate_enum.ArtifactStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: shared_artifacttype_enum.ArtifactTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
