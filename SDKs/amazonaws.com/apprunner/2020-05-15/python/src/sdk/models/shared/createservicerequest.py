import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import healthcheckconfiguration as shared_healthcheckconfiguration
from ..shared import instanceconfiguration as shared_instanceconfiguration
from ..shared import sourceconfiguration as shared_sourceconfiguration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateServiceRequest:
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    source_configuration: shared_sourceconfiguration.SourceConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    auto_scaling_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    health_check_configuration: Optional[shared_healthcheckconfiguration.HealthCheckConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    instance_configuration: Optional[shared_instanceconfiguration.InstanceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
