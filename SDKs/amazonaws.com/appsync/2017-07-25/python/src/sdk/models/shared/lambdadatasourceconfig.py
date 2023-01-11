import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaDataSourceConfig:
    r"""LambdaDataSourceConfig
    Describes an Amazon Web Services Lambda data source configuration.
    """
    
    lambda_function_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionArn') }})
    
