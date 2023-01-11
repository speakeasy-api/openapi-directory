import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolvedcomponentversion as shared_resolvedcomponentversion


@dataclass_json
@dataclasses.dataclass
class ResolveComponentCandidatesResponse:
    resolved_component_versions: Optional[list[shared_resolvedcomponentversion.ResolvedComponentVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedComponentVersions') }})
    
