import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logsetup as shared_logsetup


@dataclass_json
@dataclasses.dataclass
class Logging:
    r"""Logging
    An object representing the logging configuration for resources in your cluster.
    """
    
    cluster_logging: Optional[list[shared_logsetup.LogSetup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterLogging') }})
    
