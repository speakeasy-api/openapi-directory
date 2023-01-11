import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemtemplatefiltername_enum as shared_systemtemplatefiltername_enum


@dataclass_json
@dataclasses.dataclass
class SystemTemplateFilter:
    r"""SystemTemplateFilter
    An object that filters a system search.
    """
    
    name: shared_systemtemplatefiltername_enum.SystemTemplateFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
