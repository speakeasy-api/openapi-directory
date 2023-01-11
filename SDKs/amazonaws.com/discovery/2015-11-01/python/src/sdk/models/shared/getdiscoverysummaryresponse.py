import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customeragentinfo as shared_customeragentinfo
from ..shared import customerconnectorinfo as shared_customerconnectorinfo


@dataclass_json
@dataclasses.dataclass
class GetDiscoverySummaryResponse:
    agent_summary: Optional[shared_customeragentinfo.CustomerAgentInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentSummary') }})
    applications: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    connector_summary: Optional[shared_customerconnectorinfo.CustomerConnectorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorSummary') }})
    servers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    servers_mapped_to_applications: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serversMappedToApplications') }})
    servers_mappedto_tags: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serversMappedtoTags') }})
    
