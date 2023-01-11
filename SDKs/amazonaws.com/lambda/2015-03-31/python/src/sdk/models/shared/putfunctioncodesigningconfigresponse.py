import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutFunctionCodeSigningConfigResponse:
    code_signing_config_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigArn') }})
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    
