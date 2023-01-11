import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteConditionalForwarderRequest:
    r"""DeleteConditionalForwarderRequest
    Deletes a conditional forwarder.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    remote_domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    
