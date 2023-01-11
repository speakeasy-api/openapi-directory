import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import outputdataconfig as shared_outputdataconfig
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class StartEventsDetectionJobRequest:
    data_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    output_data_config: shared_outputdataconfig.OutputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    target_event_types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetEventTypes') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
