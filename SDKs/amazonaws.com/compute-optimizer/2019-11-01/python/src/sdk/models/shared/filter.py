import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtername_enum as shared_filtername_enum


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    <p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p>
    """
    
    name: Optional[shared_filtername_enum.FilterNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
