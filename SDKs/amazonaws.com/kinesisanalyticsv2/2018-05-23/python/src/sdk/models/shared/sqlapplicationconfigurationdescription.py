import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputdescription as shared_inputdescription
from ..shared import outputdescription as shared_outputdescription
from ..shared import referencedatasourcedescription as shared_referencedatasourcedescription


@dataclass_json
@dataclasses.dataclass
class SQLApplicationConfigurationDescription:
    r"""SQLApplicationConfigurationDescription
    Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    input_descriptions: Optional[list[shared_inputdescription.InputDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDescriptions') }})
    output_descriptions: Optional[list[shared_outputdescription.OutputDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDescriptions') }})
    reference_data_source_descriptions: Optional[list[shared_referencedatasourcedescription.ReferenceDataSourceDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceDescriptions') }})
    
