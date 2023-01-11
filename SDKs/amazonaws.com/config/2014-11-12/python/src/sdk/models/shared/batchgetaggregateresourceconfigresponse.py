import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import baseconfigurationitem as shared_baseconfigurationitem
from ..shared import aggregateresourceidentifier as shared_aggregateresourceidentifier


@dataclass_json
@dataclasses.dataclass
class BatchGetAggregateResourceConfigResponse:
    base_configuration_items: Optional[list[shared_baseconfigurationitem.BaseConfigurationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseConfigurationItems') }})
    unprocessed_resource_identifiers: Optional[list[shared_aggregateresourceidentifier.AggregateResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedResourceIdentifiers') }})
    
