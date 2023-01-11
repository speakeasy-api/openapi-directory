import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statustype_enum as shared_statustype_enum
from ..shared import resolvedartifact as shared_resolvedartifact


@dataclass_json
@dataclasses.dataclass
class BuildSummary:
    r"""BuildSummary
    Contains summary information about a batch build group.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    build_status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatus') }})
    primary_artifact: Optional[shared_resolvedartifact.ResolvedArtifact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryArtifact') }})
    requested_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    secondary_artifacts: Optional[list[shared_resolvedartifact.ResolvedArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    
