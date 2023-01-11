import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliance as shared_compliance


@dataclass_json
@dataclasses.dataclass
class ComplianceByResource:
    r"""ComplianceByResource
    Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
    """
    
    compliance: Optional[shared_compliance.Compliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compliance') }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
