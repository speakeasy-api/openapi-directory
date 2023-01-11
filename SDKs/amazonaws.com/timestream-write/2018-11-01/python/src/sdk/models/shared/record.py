import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension
from ..shared import measurevaluetype_enum as shared_measurevaluetype_enum
from ..shared import timeunit_enum as shared_timeunit_enum


@dataclass_json
@dataclasses.dataclass
class Record:
    r"""Record
    Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp. 
    """
    
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    measure_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureName') }})
    measure_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureValue') }})
    measure_value_type: Optional[shared_measurevaluetype_enum.MeasureValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeasureValueType') }})
    time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time') }})
    time_unit: Optional[shared_timeunit_enum.TimeUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
