import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import namedlogconfiguration as shared_namedlogconfiguration


@dataclasses.dataclass
class GetLogConfigurationPathParams:
    logger: str = dataclasses.field(metadata={'path_param': { 'field_name': 'logger', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLogConfigurationRequest:
    path_params: GetLogConfigurationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLogConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    named_log_configuration: Optional[shared_namedlogconfiguration.NamedLogConfiguration] = dataclasses.field(default=None)
    
