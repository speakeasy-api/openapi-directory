import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systeminstancefiltername_enum as shared_systeminstancefiltername_enum


@dataclass_json
@dataclasses.dataclass
class SystemInstanceFilter:
    r"""SystemInstanceFilter
    An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
    """
    
    name: Optional[shared_systeminstancefiltername_enum.SystemInstanceFilterNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
