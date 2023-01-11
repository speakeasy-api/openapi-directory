import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listnotificationrulesfiltername_enum as shared_listnotificationrulesfiltername_enum


@dataclass_json
@dataclasses.dataclass
class ListNotificationRulesFilter:
    r"""ListNotificationRulesFilter
    Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
    """
    
    name: shared_listnotificationrulesfiltername_enum.ListNotificationRulesFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
