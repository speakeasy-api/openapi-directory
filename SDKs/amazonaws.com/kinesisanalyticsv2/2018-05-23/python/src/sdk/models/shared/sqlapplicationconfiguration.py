import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import input as shared_input
from ..shared import output as shared_output
from ..shared import referencedatasource as shared_referencedatasource


@dataclass_json
@dataclasses.dataclass
class SQLApplicationConfiguration:
    r"""SQLApplicationConfiguration
    Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    inputs: Optional[list[shared_input.Input]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    outputs: Optional[list[shared_output.Output]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    reference_data_sources: Optional[list[shared_referencedatasource.ReferenceDataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSources') }})
    
