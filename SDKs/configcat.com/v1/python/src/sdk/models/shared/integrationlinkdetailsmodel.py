import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrationlinkdetail as shared_integrationlinkdetail


@dataclass_json
@dataclasses.dataclass
class IntegrationLinkDetailsModel:
    all_integration_link_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allIntegrationLinkCount') }})
    details: Optional[list[shared_integrationlinkdetail.IntegrationLinkDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
