import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import longtermpricingtype_enum as shared_longtermpricingtype_enum
from ..shared import snowballtype_enum as shared_snowballtype_enum


@dataclass_json
@dataclasses.dataclass
class LongTermPricingListEntry:
    r"""LongTermPricingListEntry
    Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
    """
    
    current_active_job: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentActiveJob') }})
    is_long_term_pricing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    job_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobIds') }})
    long_term_pricing_end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    long_term_pricing_start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingStatus') }})
    long_term_pricing_type: Optional[shared_longtermpricingtype_enum.LongTermPricingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingType') }})
    replacement_job: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementJob') }})
    snowball_type: Optional[shared_snowballtype_enum.SnowballTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    
