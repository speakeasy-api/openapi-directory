"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import attemptsyncconfig as shared_attemptsyncconfig
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SaveAttemptSyncConfigRequestBody:
    
    attempt_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attemptNumber') }})  
    job_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobId') }})  
    sync_config: shared_attemptsyncconfig.AttemptSyncConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('syncConfig') }})  
    