import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyrange as shared_keyrange
from ..shared import targetondeviceservice as shared_targetondeviceservice


@dataclass_json
@dataclasses.dataclass
class S3Resource:
    r"""S3Resource
    Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
    """
    
    bucket_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketArn') }})
    key_range: Optional[shared_keyrange.KeyRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyRange') }})
    target_on_device_services: Optional[list[shared_targetondeviceservice.TargetOnDeviceService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetOnDeviceServices') }})
    
