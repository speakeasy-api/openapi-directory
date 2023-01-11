import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activedirectoryconfiguration as shared_activedirectoryconfiguration
from ..shared import computefarmconfiguration as shared_computefarmconfiguration
from ..shared import licenseserviceconfiguration as shared_licenseserviceconfiguration
from ..shared import sharedfilesystemconfiguration as shared_sharedfilesystemconfiguration


@dataclass_json
@dataclasses.dataclass
class StudioComponentConfiguration:
    r"""StudioComponentConfiguration
    The configuration of the studio component, based on component type.
    """
    
    active_directory_configuration: Optional[shared_activedirectoryconfiguration.ActiveDirectoryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryConfiguration') }})
    compute_farm_configuration: Optional[shared_computefarmconfiguration.ComputeFarmConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeFarmConfiguration') }})
    license_service_configuration: Optional[shared_licenseserviceconfiguration.LicenseServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseServiceConfiguration') }})
    shared_file_system_configuration: Optional[shared_sharedfilesystemconfiguration.SharedFileSystemConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFileSystemConfiguration') }})
    
