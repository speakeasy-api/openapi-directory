import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagescanfinding as shared_imagescanfinding


@dataclass_json
@dataclasses.dataclass
class ImageScanFindings:
    r"""ImageScanFindings
    The details of an image scan.
    """
    
    finding_severity_counts: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingSeverityCounts') }})
    findings: Optional[list[shared_imagescanfinding.ImageScanFinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    image_scan_completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanCompletedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vulnerability_source_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilitySourceUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
