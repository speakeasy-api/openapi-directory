import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtercondition_enum as shared_filtercondition_enum
from ..shared import servicefiltername_enum as shared_servicefiltername_enum


@dataclass_json
@dataclasses.dataclass
class ServiceFilter:
    r"""ServiceFilter
    A complex type that lets you specify the namespaces that you want to list services for.
    """
    
    name: shared_servicefiltername_enum.ServiceFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    condition: Optional[shared_filtercondition_enum.FilterConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    
