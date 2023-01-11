import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import healthcheckconfiguration as shared_healthcheckconfiguration
from ..shared import instanceconfiguration as shared_instanceconfiguration
from ..shared import sourceconfiguration as shared_sourceconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateServiceRequest:
    service_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    auto_scaling_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    health_check_configuration: Optional[shared_healthcheckconfiguration.HealthCheckConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    instance_configuration: Optional[shared_instanceconfiguration.InstanceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    source_configuration: Optional[shared_sourceconfiguration.SourceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    
