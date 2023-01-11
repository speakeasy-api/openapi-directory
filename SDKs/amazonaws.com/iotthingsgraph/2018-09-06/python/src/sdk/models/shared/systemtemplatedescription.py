import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument
from ..shared import systemtemplatesummary as shared_systemtemplatesummary


@dataclass_json
@dataclasses.dataclass
class SystemTemplateDescription:
    r"""SystemTemplateDescription
    An object that contains a system's definition document and summary information.
    """
    
    definition: Optional[shared_definitiondocument.DefinitionDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    summary: Optional[shared_systemtemplatesummary.SystemTemplateSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    validated_namespace_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedNamespaceVersion') }})
    
