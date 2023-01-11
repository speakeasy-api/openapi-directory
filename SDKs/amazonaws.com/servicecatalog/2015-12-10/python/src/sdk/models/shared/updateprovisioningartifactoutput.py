import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningartifactdetail as shared_provisioningartifactdetail
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class UpdateProvisioningArtifactOutput:
    info: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Info') }})
    provisioning_artifact_detail: Optional[shared_provisioningartifactdetail.ProvisioningArtifactDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactDetail') }})
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
