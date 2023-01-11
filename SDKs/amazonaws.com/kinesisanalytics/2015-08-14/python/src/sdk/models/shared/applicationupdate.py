import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptionupdate as shared_cloudwatchloggingoptionupdate
from ..shared import inputupdate as shared_inputupdate
from ..shared import outputupdate as shared_outputupdate
from ..shared import referencedatasourceupdate as shared_referencedatasourceupdate


@dataclass_json
@dataclasses.dataclass
class ApplicationUpdate:
    r"""ApplicationUpdate
    Describes updates to apply to an existing Amazon Kinesis Analytics application.
    """
    
    application_code_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeUpdate') }})
    cloud_watch_logging_option_updates: Optional[list[shared_cloudwatchloggingoptionupdate.CloudWatchLoggingOptionUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionUpdates') }})
    input_updates: Optional[list[shared_inputupdate.InputUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputUpdates') }})
    output_updates: Optional[list[shared_outputupdate.OutputUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUpdates') }})
    reference_data_source_updates: Optional[list[shared_referencedatasourceupdate.ReferenceDataSourceUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceUpdates') }})
    
