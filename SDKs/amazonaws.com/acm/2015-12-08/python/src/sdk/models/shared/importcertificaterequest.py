import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ImportCertificateRequest:
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    private_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKey') }})
    certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    certificate_chain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateChain') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
