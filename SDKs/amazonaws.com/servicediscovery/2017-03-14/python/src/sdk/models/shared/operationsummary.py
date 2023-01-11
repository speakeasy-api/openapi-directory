import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationstatus_enum as shared_operationstatus_enum


@dataclass_json
@dataclasses.dataclass
class OperationSummary:
    r"""OperationSummary
    A complex type that contains information about an operation that matches the criteria that you specified in a <a href=\"https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html\">ListOperations</a> request.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    status: Optional[shared_operationstatus_enum.OperationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
