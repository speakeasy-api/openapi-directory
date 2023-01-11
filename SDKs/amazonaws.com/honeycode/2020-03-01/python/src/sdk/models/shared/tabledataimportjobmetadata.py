import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importdatasource as shared_importdatasource
from ..shared import importoptions as shared_importoptions
from ..shared import importjobsubmitter as shared_importjobsubmitter


@dataclass_json
@dataclasses.dataclass
class TableDataImportJobMetadata:
    r"""TableDataImportJobMetadata
    The metadata associated with the table data import job that was submitted.
    """
    
    data_source: shared_importdatasource.ImportDataSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    import_options: shared_importoptions.ImportOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOptions') }})
    submit_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submitter: shared_importjobsubmitter.ImportJobSubmitter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitter') }})
    
