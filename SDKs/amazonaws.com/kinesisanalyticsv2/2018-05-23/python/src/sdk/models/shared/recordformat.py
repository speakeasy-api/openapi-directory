import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mappingparameters as shared_mappingparameters
from ..shared import recordformattype_enum as shared_recordformattype_enum


@dataclass_json
@dataclasses.dataclass
class RecordFormat:
    r"""RecordFormat
     For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
    """
    
    record_format_type: shared_recordformattype_enum.RecordFormatTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatType') }})
    mapping_parameters: Optional[shared_mappingparameters.MappingParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MappingParameters') }})
    
