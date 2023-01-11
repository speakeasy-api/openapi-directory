import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument
from ..shared import entitytype_enum as shared_entitytype_enum


@dataclass_json
@dataclasses.dataclass
class EntityDescription:
    r"""EntityDescription
    Describes the properties of an entity.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: Optional[shared_definitiondocument.DefinitionDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
