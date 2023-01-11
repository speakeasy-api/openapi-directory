import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gluepolicy as shared_gluepolicy


@dataclass_json
@dataclasses.dataclass
class GetResourcePoliciesResponse:
    get_resource_policies_response_list: Optional[list[shared_gluepolicy.GluePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetResourcePoliciesResponseList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
