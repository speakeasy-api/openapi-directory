import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crallocationstrategy_enum as shared_crallocationstrategy_enum
from ..shared import ec2configuration as shared_ec2configuration
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import crtype_enum as shared_crtype_enum


@dataclass_json
@dataclasses.dataclass
class ComputeResource:
    r"""ComputeResource
    An object representing an Batch compute resource. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html\">Compute Environments</a> in the <i>Batch User Guide</i>.
    """
    
    maxv_cpus: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxvCpus') }})
    subnets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    type: shared_crtype_enum.CrTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allocation_strategy: Optional[shared_crallocationstrategy_enum.CrAllocationStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationStrategy') }})
    bid_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    desiredv_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredvCpus') }})
    ec2_configuration: Optional[list[shared_ec2configuration.Ec2Configuration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2Configuration') }})
    ec2_key_pair: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2KeyPair') }})
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    instance_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceRole') }})
    instance_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    launch_template: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    minv_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minvCpus') }})
    placement_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroup') }})
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    spot_iam_fleet_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spotIamFleetRole') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
