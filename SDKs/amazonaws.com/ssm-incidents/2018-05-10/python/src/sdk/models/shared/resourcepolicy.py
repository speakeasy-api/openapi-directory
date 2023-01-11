import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResourcePolicy:
    r"""ResourcePolicy
    The resource policy that allows Incident Manager to perform actions on resources on your behalf.
    """
    
    policy_document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDocument') }})
    policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyId') }})
    ram_resource_share_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramResourceShareRegion') }})
    
