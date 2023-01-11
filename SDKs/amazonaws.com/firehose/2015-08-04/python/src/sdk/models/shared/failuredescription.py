import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverystreamfailuretype_enum as shared_deliverystreamfailuretype_enum


@dataclass_json
@dataclasses.dataclass
class FailureDescription:
    r"""FailureDescription
    Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
    """
    
    details: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    type: shared_deliverystreamfailuretype_enum.DeliveryStreamFailureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
