import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import piientitiesdetectionmode_enum as shared_piientitiesdetectionmode_enum
from ..shared import outputdataconfig as shared_outputdataconfig
from ..shared import redactionconfig as shared_redactionconfig
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class StartPiiEntitiesDetectionJobRequest:
    data_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    mode: shared_piientitiesdetectionmode_enum.PiiEntitiesDetectionModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    output_data_config: shared_outputdataconfig.OutputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    redaction_config: Optional[shared_redactionconfig.RedactionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionConfig') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
