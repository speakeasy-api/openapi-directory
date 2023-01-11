import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import efsvolumeconfiguration as shared_efsvolumeconfiguration
from ..shared import host as shared_host


@dataclass_json
@dataclasses.dataclass
class Volume:
    r"""Volume
    A data volume used in a job's container properties.
    """
    
    efs_volume_configuration: Optional[shared_efsvolumeconfiguration.EfsVolumeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('efsVolumeConfiguration') }})
    host: Optional[shared_host.Host] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
