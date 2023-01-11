import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacecompact as shared_workspacecompact

class OrganizationExportResponseStateEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class OrganizationExportResponse:
    r"""OrganizationExportResponse
    An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    organization: Optional[shared_workspacecompact.WorkspaceCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    state: Optional[OrganizationExportResponseStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
