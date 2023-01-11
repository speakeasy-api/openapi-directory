import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionrecommendationfiltername_enum as shared_lambdafunctionrecommendationfiltername_enum


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionRecommendationFilter:
    r"""LambdaFunctionRecommendationFilter
    <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
    """
    
    name: Optional[shared_lambdafunctionrecommendationfiltername_enum.LambdaFunctionRecommendationFilterNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
