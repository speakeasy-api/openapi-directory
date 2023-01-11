import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetschema as shared_datasetschema
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    dataset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    dataset_schema: shared_datasetschema.DatasetSchema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSchema') }})
    server_side_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
