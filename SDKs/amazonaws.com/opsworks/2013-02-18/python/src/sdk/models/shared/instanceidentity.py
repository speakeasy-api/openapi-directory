import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InstanceIdentity:
    r"""InstanceIdentity
    Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href=\"https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html\">Instance Metadata and User Data</a>.
    """
    
    document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Document') }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signature') }})
    
