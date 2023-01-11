import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResourceServerScopeType:
    r"""ResourceServerScopeType
    A resource server scope.
    """
    
    scope_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScopeDescription') }})
    scope_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScopeName') }})
    
