import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputLambdaProcessorDescription:
    r"""InputLambdaProcessorDescription
    For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
