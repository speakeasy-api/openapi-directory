import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportstatus_enum as shared_exportstatus_enum
from ..shared import importexportfileformat_enum as shared_importexportfileformat_enum
from ..shared import exportresourcespecification as shared_exportresourcespecification


@dataclass_json
@dataclasses.dataclass
class ExportSummary:
    r"""ExportSummary
    Provides summary information about an export in an export list. 
    """
    
    creation_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportId') }})
    export_status: Optional[shared_exportstatus_enum.ExportStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportStatus') }})
    file_format: Optional[shared_importexportfileformat_enum.ImportExportFileFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_specification: Optional[shared_exportresourcespecification.ExportResourceSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    
