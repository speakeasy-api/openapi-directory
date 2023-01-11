import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationcollectionfilter as shared_cloudformationcollectionfilter


@dataclass_json
@dataclasses.dataclass
class ResourceCollectionFilter:
    r"""ResourceCollectionFilter
     Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. 
    """
    
    cloud_formation: Optional[shared_cloudformationcollectionfilter.CloudFormationCollectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    
