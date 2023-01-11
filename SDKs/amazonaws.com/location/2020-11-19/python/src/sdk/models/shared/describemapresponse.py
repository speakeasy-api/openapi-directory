import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mapconfiguration as shared_mapconfiguration
from ..shared import pricingplan_enum as shared_pricingplan_enum


@dataclass_json
@dataclasses.dataclass
class DescribeMapResponse:
    configuration: shared_mapconfiguration.MapConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    map_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MapArn') }})
    map_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MapName') }})
    pricing_plan: shared_pricingplan_enum.PricingPlanEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
