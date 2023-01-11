import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2networkaclassociation as shared_awsec2networkaclassociation
from ..shared import awsec2networkaclentry as shared_awsec2networkaclentry


@dataclass_json
@dataclasses.dataclass
class AwsEc2NetworkACLDetails:
    r"""AwsEc2NetworkACLDetails
    Contains details about an EC2 network access control list (ACL).
    """
    
    associations: Optional[list[shared_awsec2networkaclassociation.AwsEc2NetworkACLAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Associations') }})
    entries: Optional[list[shared_awsec2networkaclentry.AwsEc2NetworkACLEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefault') }})
    network_acl_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkAclId') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
