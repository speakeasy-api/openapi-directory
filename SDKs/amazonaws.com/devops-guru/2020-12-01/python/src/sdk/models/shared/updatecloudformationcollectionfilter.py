import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateCloudFormationCollectionFilter:
    r"""UpdateCloudFormationCollectionFilter
     Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
    """
    
    stack_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackNames') }})
    
