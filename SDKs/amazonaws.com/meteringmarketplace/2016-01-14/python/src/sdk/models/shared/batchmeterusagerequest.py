"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import usagerecord as shared_usagerecord
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BatchMeterUsageRequest:
    r"""A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application."""
    
    product_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProductCode') }})  
    usage_records: list[shared_usagerecord.UsageRecord] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UsageRecords') }})  
    