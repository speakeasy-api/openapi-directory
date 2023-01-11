import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awswafwebaclrule as shared_awswafwebaclrule


@dataclass_json
@dataclasses.dataclass
class AwsWafWebACLDetails:
    r"""AwsWafWebACLDetails
    Details about an WAF WebACL.
    """
    
    default_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rules: Optional[list[shared_awswafwebaclrule.AwsWafWebACLRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    web_acl_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    
