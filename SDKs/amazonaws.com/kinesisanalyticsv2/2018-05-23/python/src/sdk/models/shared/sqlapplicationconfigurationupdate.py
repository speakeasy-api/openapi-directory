import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputupdate as shared_inputupdate
from ..shared import outputupdate as shared_outputupdate
from ..shared import referencedatasourceupdate as shared_referencedatasourceupdate


@dataclass_json
@dataclasses.dataclass
class SQLApplicationConfigurationUpdate:
    r"""SQLApplicationConfigurationUpdate
    Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    input_updates: Optional[list[shared_inputupdate.InputUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputUpdates') }})
    output_updates: Optional[list[shared_outputupdate.OutputUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUpdates') }})
    reference_data_source_updates: Optional[list[shared_referencedatasourceupdate.ReferenceDataSourceUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceUpdates') }})
    
