import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewaycapabilitysummary as shared_gatewaycapabilitysummary
from ..shared import gatewayplatform as shared_gatewayplatform


@dataclass_json
@dataclasses.dataclass
class DescribeGatewayResponse:
    creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayArn') }})
    gateway_capability_summaries: list[shared_gatewaycapabilitysummary.GatewayCapabilitySummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayCapabilitySummaries') }})
    gateway_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayName') }})
    last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_platform: Optional[shared_gatewayplatform.GatewayPlatform] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayPlatform') }})
    
