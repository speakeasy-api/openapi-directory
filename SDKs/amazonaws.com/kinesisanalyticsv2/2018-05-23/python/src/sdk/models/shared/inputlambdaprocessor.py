import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputLambdaProcessor:
    r"""InputLambdaProcessor
    An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. 
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
