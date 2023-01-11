import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequest:
    dataset_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    dataset_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaArn') }})
    
