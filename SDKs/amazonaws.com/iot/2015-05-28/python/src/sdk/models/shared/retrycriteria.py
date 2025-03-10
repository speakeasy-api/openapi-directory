"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import retryablefailuretype_enum as shared_retryablefailuretype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RetryCriteria:
    r"""The criteria that determines how many retries are allowed for each failure type for a job."""
    
    failure_type: shared_retryablefailuretype_enum.RetryableFailureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('failureType') }})  
    number_of_retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('numberOfRetries') }})  
    