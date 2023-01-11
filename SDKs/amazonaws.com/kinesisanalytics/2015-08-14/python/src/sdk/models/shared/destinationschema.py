import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordformattype_enum as shared_recordformattype_enum


@dataclass_json
@dataclasses.dataclass
class DestinationSchema:
    r"""DestinationSchema
    Describes the data format when records are written to the destination. For more information, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html\">Configuring Application Output</a>. 
    """
    
    record_format_type: shared_recordformattype_enum.RecordFormatTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatType') }})
    
