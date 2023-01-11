import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvmappingparameters as shared_csvmappingparameters
from ..shared import jsonmappingparameters as shared_jsonmappingparameters


@dataclass_json
@dataclasses.dataclass
class MappingParameters:
    r"""MappingParameters
    When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
    """
    
    csv_mapping_parameters: Optional[shared_csvmappingparameters.CsvMappingParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CSVMappingParameters') }})
    json_mapping_parameters: Optional[shared_jsonmappingparameters.JSONMappingParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JSONMappingParameters') }})
    
