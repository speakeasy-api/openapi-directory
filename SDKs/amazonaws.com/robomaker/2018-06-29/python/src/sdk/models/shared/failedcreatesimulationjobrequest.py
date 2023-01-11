import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationjoberrorcode_enum as shared_simulationjoberrorcode_enum
from ..shared import simulationjobrequest as shared_simulationjobrequest


@dataclass_json
@dataclasses.dataclass
class FailedCreateSimulationJobRequest:
    r"""FailedCreateSimulationJobRequest
    Information about a failed create simulation job request.
    """
    
    failed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[shared_simulationjoberrorcode_enum.SimulationJobErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    request: Optional[shared_simulationjobrequest.SimulationJobRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    
