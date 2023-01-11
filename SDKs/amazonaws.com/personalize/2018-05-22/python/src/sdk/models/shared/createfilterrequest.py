import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateFilterRequest:
    dataset_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    filter_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterExpression') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
