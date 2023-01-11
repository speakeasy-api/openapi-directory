import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsLambdaFunctionTracingConfig:
    r"""AwsLambdaFunctionTracingConfig
    The function's X-Ray tracing configuration.
    """
    
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    
