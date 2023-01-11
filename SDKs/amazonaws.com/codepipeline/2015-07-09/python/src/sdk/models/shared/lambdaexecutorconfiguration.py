import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaExecutorConfiguration:
    r"""LambdaExecutorConfiguration
    Details about the configuration for the <code>Lambda</code> action engine, or executor.
    """
    
    lambda_function_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionArn') }})
    
