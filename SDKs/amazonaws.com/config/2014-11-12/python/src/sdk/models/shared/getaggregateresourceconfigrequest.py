import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateresourceidentifier as shared_aggregateresourceidentifier


@dataclass_json
@dataclasses.dataclass
class GetAggregateResourceConfigRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    resource_identifier: shared_aggregateresourceidentifier.AggregateResourceIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
