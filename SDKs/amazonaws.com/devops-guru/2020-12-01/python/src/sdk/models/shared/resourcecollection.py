import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationcollection as shared_cloudformationcollection


@dataclass_json
@dataclasses.dataclass
class ResourceCollection:
    r"""ResourceCollection
     A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
    """
    
    cloud_formation: Optional[shared_cloudformationcollection.CloudFormationCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    
