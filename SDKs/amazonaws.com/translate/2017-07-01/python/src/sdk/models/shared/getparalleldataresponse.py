import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paralleldatadatalocation as shared_paralleldatadatalocation
from ..shared import paralleldataproperties as shared_paralleldataproperties


@dataclass_json
@dataclasses.dataclass
class GetParallelDataResponse:
    auxiliary_data_location: Optional[shared_paralleldatadatalocation.ParallelDataDataLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuxiliaryDataLocation') }})
    data_location: Optional[shared_paralleldatadatalocation.ParallelDataDataLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocation') }})
    latest_update_attempt_auxiliary_data_location: Optional[shared_paralleldatadatalocation.ParallelDataDataLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestUpdateAttemptAuxiliaryDataLocation') }})
    parallel_data_properties: Optional[shared_paralleldataproperties.ParallelDataProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataProperties') }})
    
