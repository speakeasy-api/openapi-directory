import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaConfiguration:
    r"""LambdaConfiguration
    Contains information about a Lambda configuration.
    """
    
    lambda_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
