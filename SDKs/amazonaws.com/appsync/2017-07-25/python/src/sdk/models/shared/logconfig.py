import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldloglevel_enum as shared_fieldloglevel_enum


@dataclass_json
@dataclasses.dataclass
class LogConfig:
    r"""LogConfig
    The CloudWatch Logs configuration.
    """
    
    cloud_watch_logs_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsRoleArn') }})
    field_log_level: shared_fieldloglevel_enum.FieldLogLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldLogLevel') }})
    exclude_verbose_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeVerboseContent') }})
    
