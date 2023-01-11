import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateCustomKeyStoreRequest:
    cloud_hsm_cluster_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    custom_key_store_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreName') }})
    key_store_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorePassword') }})
    trust_anchor_certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustAnchorCertificate') }})
    
