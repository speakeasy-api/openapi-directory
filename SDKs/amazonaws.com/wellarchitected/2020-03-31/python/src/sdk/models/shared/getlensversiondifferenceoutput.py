import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import versiondifferences as shared_versiondifferences


@dataclass_json
@dataclasses.dataclass
class GetLensVersionDifferenceOutput:
    base_lens_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseLensVersion') }})
    latest_lens_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestLensVersion') }})
    lens_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    version_differences: Optional[shared_versiondifferences.VersionDifferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionDifferences') }})
    
