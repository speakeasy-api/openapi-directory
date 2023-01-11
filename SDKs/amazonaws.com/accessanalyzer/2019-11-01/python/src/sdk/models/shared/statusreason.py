import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reasoncode_enum as shared_reasoncode_enum


@dataclass_json
@dataclasses.dataclass
class StatusReason:
    r"""StatusReason
    Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
    """
    
    code: shared_reasoncode_enum.ReasonCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
