import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentlatestversion as shared_componentlatestversion


@dataclass_json
@dataclasses.dataclass
class Component:
    r"""Component
    Contains information about a component.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    latest_version: Optional[shared_componentlatestversion.ComponentLatestVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestVersion') }})
    
