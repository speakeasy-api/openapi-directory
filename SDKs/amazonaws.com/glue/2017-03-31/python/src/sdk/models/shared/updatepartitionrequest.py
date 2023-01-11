import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitioninput as shared_partitioninput


@dataclass_json
@dataclasses.dataclass
class UpdatePartitionRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_input: shared_partitioninput.PartitionInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionInput') }})
    partition_value_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValueList') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
