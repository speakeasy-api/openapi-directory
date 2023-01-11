import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetschema as shared_datasetschema


@dataclass_json
@dataclasses.dataclass
class DescribeSchemaResponse:
    schema: Optional[shared_datasetschema.DatasetSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
