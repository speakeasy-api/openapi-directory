import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeplatform_enum as shared_computeplatform_enum
from ..shared import minimumhealthyhosts as shared_minimumhealthyhosts
from ..shared import trafficroutingconfig as shared_trafficroutingconfig


@dataclass_json
@dataclasses.dataclass
class DeploymentConfigInfo:
    r"""DeploymentConfigInfo
    Information about a deployment configuration.
    """
    
    compute_platform: Optional[shared_computeplatform_enum.ComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    create_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigId') }})
    deployment_config_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    minimum_healthy_hosts: Optional[shared_minimumhealthyhosts.MinimumHealthyHosts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumHealthyHosts') }})
    traffic_routing_config: Optional[shared_trafficroutingconfig.TrafficRoutingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficRoutingConfig') }})
    
