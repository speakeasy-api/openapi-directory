import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import outputdataconfig as shared_outputdataconfig


@dataclass_json
@dataclasses.dataclass
class StartFhirImportJobRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    data_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    datastore_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    job_output_data_config: shared_outputdataconfig.OutputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobOutputDataConfig') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    
