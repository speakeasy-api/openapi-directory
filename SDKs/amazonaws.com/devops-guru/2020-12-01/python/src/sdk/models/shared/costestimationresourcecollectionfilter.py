import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationcostestimationresourcecollectionfilter as shared_cloudformationcostestimationresourcecollectionfilter


@dataclass_json
@dataclasses.dataclass
class CostEstimationResourceCollectionFilter:
    r"""CostEstimationResourceCollectionFilter
    Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href=\"https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html\">Estimate your Amazon DevOps Guru costs</a> and <a href=\"http://aws.amazon.com/devops-guru/pricing/\">Amazon DevOps Guru pricing</a>. 
    """
    
    cloud_formation: Optional[shared_cloudformationcostestimationresourcecollectionfilter.CloudFormationCostEstimationResourceCollectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    
