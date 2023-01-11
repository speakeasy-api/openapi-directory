import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import namedlogconfiguration as shared_namedlogconfiguration


@dataclasses.dataclass
class ListLogConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    named_log_configurations: Optional[list[shared_namedlogconfiguration.NamedLogConfiguration]] = dataclasses.field(default=None)
    
