import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaConflictHandlerConfig:
    r"""LambdaConflictHandlerConfig
    The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
    """
    
    lambda_conflict_handler_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerArn') }})
    
