import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitioninput as shared_partitioninput


@dataclass_json
@dataclasses.dataclass
class BatchUpdatePartitionRequestEntry:
    r"""BatchUpdatePartitionRequestEntry
    A structure that contains the values and structure used to update a partition.
    """
    
    partition_input: shared_partitioninput.PartitionInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionInput') }})
    partition_value_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValueList') }})
    
