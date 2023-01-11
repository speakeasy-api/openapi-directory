import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awslambdafunctionenvironmenterror as shared_awslambdafunctionenvironmenterror


@dataclass_json
@dataclasses.dataclass
class AwsLambdaFunctionEnvironment:
    r"""AwsLambdaFunctionEnvironment
    A function's environment variable settings.
    """
    
    error: Optional[shared_awslambdafunctionenvironmenterror.AwsLambdaFunctionEnvironmentError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    
