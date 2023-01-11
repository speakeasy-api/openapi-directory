import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogsconfiguration as shared_cloudwatchlogsconfiguration
from ..shared import recipes as shared_recipes
from ..shared import lifecycleeventconfiguration as shared_lifecycleeventconfiguration
from ..shared import layertype_enum as shared_layertype_enum
from ..shared import volumeconfiguration as shared_volumeconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateLayerRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    shortname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shortname') }})
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    type: shared_layertype_enum.LayerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    auto_assign_elastic_ips: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignElasticIps') }})
    auto_assign_public_ips: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAssignPublicIps') }})
    cloud_watch_logs_configuration: Optional[shared_cloudwatchlogsconfiguration.CloudWatchLogsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsConfiguration') }})
    custom_instance_profile_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomInstanceProfileArn') }})
    custom_json: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    custom_recipes: Optional[shared_recipes.Recipes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRecipes') }})
    custom_security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomSecurityGroupIds') }})
    enable_auto_healing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAutoHealing') }})
    install_updates_on_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    lifecycle_event_configuration: Optional[shared_lifecycleeventconfiguration.LifecycleEventConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleEventConfiguration') }})
    packages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Packages') }})
    use_ebs_optimized_instances: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseEbsOptimizedInstances') }})
    volume_configurations: Optional[list[shared_volumeconfiguration.VolumeConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeConfigurations') }})
    
