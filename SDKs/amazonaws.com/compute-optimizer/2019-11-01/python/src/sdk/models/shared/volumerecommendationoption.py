import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volumeconfiguration as shared_volumeconfiguration


@dataclass_json
@dataclasses.dataclass
class VolumeRecommendationOption:
    r"""VolumeRecommendationOption
    Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
    """
    
    configuration: Optional[shared_volumeconfiguration.VolumeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    performance_risk: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
