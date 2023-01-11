import dataclasses
from typing import Optional
from ..shared import logconfiguration as shared_logconfiguration
from ..shared import error as shared_error
from ..shared import namedlogconfiguration as shared_namedlogconfiguration


@dataclasses.dataclass
class SetLogConfigurationPathParams:
    logger: str = dataclasses.field(metadata={'path_param': { 'field_name': 'logger', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetLogConfigurationRequest:
    path_params: SetLogConfigurationPathParams = dataclasses.field()
    request: shared_logconfiguration.LogConfiguration = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetLogConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    named_log_configuration: Optional[shared_namedlogconfiguration.NamedLogConfiguration] = dataclasses.field(default=None)
    
