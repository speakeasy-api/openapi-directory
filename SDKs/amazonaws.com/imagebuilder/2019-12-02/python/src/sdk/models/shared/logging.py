import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3logs as shared_s3logs


@dataclass_json
@dataclasses.dataclass
class Logging:
    r"""Logging
    Logging configuration defines where Image Builder uploads your logs.
    """
    
    s3_logs: Optional[shared_s3logs.S3Logs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    
