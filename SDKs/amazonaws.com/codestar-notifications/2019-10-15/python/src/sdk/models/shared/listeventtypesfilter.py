import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listeventtypesfiltername_enum as shared_listeventtypesfiltername_enum


@dataclass_json
@dataclasses.dataclass
class ListEventTypesFilter:
    r"""ListEventTypesFilter
    Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
    """
    
    name: shared_listeventtypesfiltername_enum.ListEventTypesFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
