import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverystreamencryptionconfiguration as shared_deliverystreamencryptionconfiguration
from ..shared import deliverystreamstatus_enum as shared_deliverystreamstatus_enum
from ..shared import deliverystreamtype_enum as shared_deliverystreamtype_enum
from ..shared import destinationdescription as shared_destinationdescription
from ..shared import failuredescription as shared_failuredescription
from ..shared import sourcedescription as shared_sourcedescription


@dataclass_json
@dataclasses.dataclass
class DeliveryStreamDescription:
    r"""DeliveryStreamDescription
    Contains information about a delivery stream.
    """
    
    delivery_stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamARN') }})
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_status: shared_deliverystreamstatus_enum.DeliveryStreamStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamStatus') }})
    delivery_stream_type: shared_deliverystreamtype_enum.DeliveryStreamTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    destinations: list[shared_destinationdescription.DestinationDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    has_more_destinations: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreDestinations') }})
    version_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    create_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_stream_encryption_configuration: Optional[shared_deliverystreamencryptionconfiguration.DeliveryStreamEncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfiguration') }})
    failure_description: Optional[shared_failuredescription.FailureDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDescription') }})
    last_update_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[shared_sourcedescription.SourceDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
