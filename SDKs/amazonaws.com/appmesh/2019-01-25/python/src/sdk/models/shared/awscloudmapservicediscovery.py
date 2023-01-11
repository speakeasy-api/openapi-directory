import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudmapinstanceattribute as shared_awscloudmapinstanceattribute


@dataclass_json
@dataclasses.dataclass
class AwsCloudMapServiceDiscovery:
    r"""AwsCloudMapServiceDiscovery
    <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
    """
    
    namespace_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    attributes: Optional[list[shared_awscloudmapinstanceattribute.AwsCloudMapInstanceAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
