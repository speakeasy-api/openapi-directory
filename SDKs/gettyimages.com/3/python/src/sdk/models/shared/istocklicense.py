import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetlicensename_enum as shared_assetlicensename_enum


@dataclass_json
@dataclasses.dataclass
class IStockLicense:
    credits: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    license_type: Optional[shared_assetlicensename_enum.AssetLicenseNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_type') }})
    
