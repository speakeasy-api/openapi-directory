import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computelocation_enum as shared_computelocation_enum
from ..shared import forwardingconfig as shared_forwardingconfig


@dataclass_json
@dataclasses.dataclass
class TransformProcessingConfig:
    r"""TransformProcessingConfig
    The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
    """
    
    compute_location: shared_computelocation_enum.ComputeLocationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeLocation') }})
    forwarding_config: Optional[shared_forwardingconfig.ForwardingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    
