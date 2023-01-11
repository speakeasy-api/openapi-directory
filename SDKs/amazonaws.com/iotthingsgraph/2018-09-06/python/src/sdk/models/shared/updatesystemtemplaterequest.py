import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument


@dataclass_json
@dataclasses.dataclass
class UpdateSystemTemplateRequest:
    definition: shared_definitiondocument.DefinitionDocument = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    compatible_namespace_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleNamespaceVersion') }})
    
