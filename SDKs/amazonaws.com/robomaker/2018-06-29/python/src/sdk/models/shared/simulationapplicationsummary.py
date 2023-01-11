import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import robotsoftwaresuite as shared_robotsoftwaresuite
from ..shared import simulationsoftwaresuite as shared_simulationsoftwaresuite


@dataclass_json
@dataclasses.dataclass
class SimulationApplicationSummary:
    r"""SimulationApplicationSummary
    Summary information for a simulation application.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    robot_software_suite: Optional[shared_robotsoftwaresuite.RobotSoftwareSuite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    simulation_software_suite: Optional[shared_simulationsoftwaresuite.SimulationSoftwareSuite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationSoftwareSuite') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
