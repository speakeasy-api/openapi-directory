import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedconcurrencyconfiglistitem as shared_provisionedconcurrencyconfiglistitem


@dataclass_json
@dataclasses.dataclass
class ListProvisionedConcurrencyConfigsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    provisioned_concurrency_configs: Optional[list[shared_provisionedconcurrencyconfiglistitem.ProvisionedConcurrencyConfigListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedConcurrencyConfigs') }})
    
