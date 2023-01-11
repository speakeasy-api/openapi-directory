import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeConditionalForwardersRequest:
    r"""DescribeConditionalForwardersRequest
    Describes a conditional forwarder.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    remote_domain_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainNames') }})
    
