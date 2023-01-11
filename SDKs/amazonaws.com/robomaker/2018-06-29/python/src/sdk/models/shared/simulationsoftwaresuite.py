import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationsoftwaresuitetype_enum as shared_simulationsoftwaresuitetype_enum


@dataclass_json
@dataclasses.dataclass
class SimulationSoftwareSuite:
    r"""SimulationSoftwareSuite
    Information about a simulation software suite.
    """
    
    name: Optional[shared_simulationsoftwaresuitetype_enum.SimulationSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
