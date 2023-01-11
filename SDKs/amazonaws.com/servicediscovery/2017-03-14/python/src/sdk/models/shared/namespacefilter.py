import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtercondition_enum as shared_filtercondition_enum
from ..shared import namespacefiltername_enum as shared_namespacefiltername_enum


@dataclass_json
@dataclasses.dataclass
class NamespaceFilter:
    r"""NamespaceFilter
    A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
    """
    
    name: shared_namespacefiltername_enum.NamespaceFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    condition: Optional[shared_filtercondition_enum.FilterConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    
