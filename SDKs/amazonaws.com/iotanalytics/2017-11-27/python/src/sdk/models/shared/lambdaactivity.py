import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaActivity:
    r"""LambdaActivity
    An activity that runs a Lambda function to modify the message.
    """
    
    batch_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    lambda_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
