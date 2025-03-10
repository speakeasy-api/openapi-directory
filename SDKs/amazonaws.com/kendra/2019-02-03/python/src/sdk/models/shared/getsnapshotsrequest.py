"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import interval_enum as shared_interval_enum
from ..shared import metrictype_enum as shared_metrictype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSnapshotsRequest:
    
    index_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IndexId') }})  
    interval: shared_interval_enum.IntervalEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Interval') }})  
    metric_type: shared_metrictype_enum.MetricTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MetricType') }})  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaxResults'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})  
    