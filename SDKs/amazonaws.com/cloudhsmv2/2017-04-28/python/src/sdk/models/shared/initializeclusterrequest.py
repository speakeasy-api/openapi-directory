import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InitializeClusterRequest:
    cluster_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    signed_cert: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignedCert') }})
    trust_anchor: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustAnchor') }})
    
