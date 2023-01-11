import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodeconnectionpool as shared_virtualnodeconnectionpool
from ..shared import healthcheckpolicy as shared_healthcheckpolicy
from ..shared import outlierdetection as shared_outlierdetection
from ..shared import portmapping as shared_portmapping
from ..shared import listenertimeout as shared_listenertimeout
from ..shared import listenertls as shared_listenertls


@dataclass_json
@dataclasses.dataclass
class Listener:
    r"""Listener
    An object that represents a listener for a virtual node.
    """
    
    port_mapping: shared_portmapping.PortMapping = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    connection_pool: Optional[shared_virtualnodeconnectionpool.VirtualNodeConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionPool') }})
    health_check: Optional[shared_healthcheckpolicy.HealthCheckPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    outlier_detection: Optional[shared_outlierdetection.OutlierDetection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlierDetection') }})
    timeout: Optional[shared_listenertimeout.ListenerTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    tls: Optional[shared_listenertls.ListenerTLS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
