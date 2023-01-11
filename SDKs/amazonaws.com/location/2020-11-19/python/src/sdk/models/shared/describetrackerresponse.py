import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pricingplan_enum as shared_pricingplan_enum


@dataclass_json
@dataclasses.dataclass
class DescribeTrackerResponse:
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: shared_pricingplan_enum.PricingPlanEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    tracker_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackerArn') }})
    tracker_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackerName') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    pricing_plan_data_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlanDataSource') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
