import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listtargetsfiltername_enum as shared_listtargetsfiltername_enum


@dataclass_json
@dataclasses.dataclass
class ListTargetsFilter:
    r"""ListTargetsFilter
    Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE.
    """
    
    name: shared_listtargetsfiltername_enum.ListTargetsFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
