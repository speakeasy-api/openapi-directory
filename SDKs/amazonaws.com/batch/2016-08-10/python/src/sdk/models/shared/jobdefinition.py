import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerproperties as shared_containerproperties
from ..shared import nodeproperties as shared_nodeproperties
from ..shared import platformcapability_enum as shared_platformcapability_enum
from ..shared import retrystrategy as shared_retrystrategy
from ..shared import jobtimeout as shared_jobtimeout


@dataclass_json
@dataclasses.dataclass
class JobDefinition:
    r"""JobDefinition
    An object representing an Batch job definition.
    """
    
    job_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionArn') }})
    job_definition_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionName') }})
    revision: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    container_properties: Optional[shared_containerproperties.ContainerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerProperties') }})
    node_properties: Optional[shared_nodeproperties.NodeProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[list[shared_platformcapability_enum.PlatformCapabilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[shared_retrystrategy.RetryStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[shared_jobtimeout.JobTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
