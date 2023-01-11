import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowtemplatefiltername_enum as shared_flowtemplatefiltername_enum


@dataclass_json
@dataclasses.dataclass
class FlowTemplateFilter:
    r"""FlowTemplateFilter
    An object that filters a workflow search.
    """
    
    name: shared_flowtemplatefiltername_enum.FlowTemplateFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
