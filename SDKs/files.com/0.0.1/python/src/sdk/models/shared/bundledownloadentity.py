import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bundleregistrationentity as shared_bundleregistrationentity

class BundleDownloadEntityDownloadMethodEnum(str, Enum):
    FILE = "file"
    FULL_ZIP = "full_zip"


@dataclass_json
@dataclasses.dataclass
class BundleDownloadEntity:
    r"""BundleDownloadEntity
    List Bundle Downloads
    """
    
    bundle_registration: Optional[shared_bundleregistrationentity.BundleRegistrationEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundle_registration') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_method: Optional[BundleDownloadEntityDownloadMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_method') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
