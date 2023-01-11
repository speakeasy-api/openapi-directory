import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import baseconfigurationitem as shared_baseconfigurationitem
from ..shared import resourcekey as shared_resourcekey


@dataclass_json
@dataclasses.dataclass
class BatchGetResourceConfigResponse:
    base_configuration_items: Optional[list[shared_baseconfigurationitem.BaseConfigurationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseConfigurationItems') }})
    unprocessed_resource_keys: Optional[list[shared_resourcekey.ResourceKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprocessedResourceKeys') }})
    
