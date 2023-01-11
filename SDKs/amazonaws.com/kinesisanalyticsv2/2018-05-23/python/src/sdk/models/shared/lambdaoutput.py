import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaOutput:
    r"""LambdaOutput
    When you configure a SQL-based Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. 
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
