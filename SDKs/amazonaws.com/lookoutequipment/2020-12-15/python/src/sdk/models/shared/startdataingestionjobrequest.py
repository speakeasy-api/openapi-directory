import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ingestioninputconfiguration as shared_ingestioninputconfiguration


@dataclass_json
@dataclasses.dataclass
class StartDataIngestionJobRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    dataset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    ingestion_input_configuration: shared_ingestioninputconfiguration.IngestionInputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionInputConfiguration') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
