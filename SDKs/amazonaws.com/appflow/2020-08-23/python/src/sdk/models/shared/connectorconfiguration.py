import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectormetadata as shared_connectormetadata
from ..shared import connectortype_enum as shared_connectortype_enum
from ..shared import schedulefrequencytype_enum as shared_schedulefrequencytype_enum
from ..shared import triggertype_enum as shared_triggertype_enum


@dataclass_json
@dataclasses.dataclass
class ConnectorConfiguration:
    can_use_as_destination: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseAsDestination') }})
    can_use_as_source: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseAsSource') }})
    connector_metadata: Optional[shared_connectormetadata.ConnectorMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorMetadata') }})
    is_private_link_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivateLinkEnabled') }})
    is_private_link_endpoint_url_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivateLinkEndpointUrlRequired') }})
    supported_destination_connectors: Optional[list[shared_connectortype_enum.ConnectorTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedDestinationConnectors') }})
    supported_scheduling_frequencies: Optional[list[shared_schedulefrequencytype_enum.ScheduleFrequencyTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedSchedulingFrequencies') }})
    supported_trigger_types: Optional[list[shared_triggertype_enum.TriggerTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedTriggerTypes') }})
    
