import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpurldestinationsummary as shared_httpurldestinationsummary
from ..shared import topicruledestinationstatus_enum as shared_topicruledestinationstatus_enum
from ..shared import vpcdestinationsummary as shared_vpcdestinationsummary


@dataclass_json
@dataclasses.dataclass
class TopicRuleDestinationSummary:
    r"""TopicRuleDestinationSummary
    Information about the topic rule destination.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    http_url_summary: Optional[shared_httpurldestinationsummary.HTTPURLDestinationSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpUrlSummary') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_topicruledestinationstatus_enum.TopicRuleDestinationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    vpc_destination_summary: Optional[shared_vpcdestinationsummary.VpcDestinationSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcDestinationSummary') }})
    
