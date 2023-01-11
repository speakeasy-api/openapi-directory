import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ioteventsdestinationconfiguration as shared_ioteventsdestinationconfiguration
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration


@dataclass_json
@dataclasses.dataclass
class DatasetContentDeliveryDestination:
    r"""DatasetContentDeliveryDestination
    The destination to which dataset contents are delivered.
    """
    
    iot_events_destination_configuration: Optional[shared_ioteventsdestinationconfiguration.IotEventsDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEventsDestinationConfiguration') }})
    s3_destination_configuration: Optional[shared_s3destinationconfiguration.S3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfiguration') }})
    
