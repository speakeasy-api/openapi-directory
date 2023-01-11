import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checksum as shared_checksum


@dataclass_json
@dataclasses.dataclass
class CreateAppPkg:
    app_pkg_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgName') }})
    app_pkg_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgPath') }})
    app_pkg_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgVersion') }})
    checksum: shared_checksum.Checksum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    app_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProvider') }})
    user_defined_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedData') }})
    
