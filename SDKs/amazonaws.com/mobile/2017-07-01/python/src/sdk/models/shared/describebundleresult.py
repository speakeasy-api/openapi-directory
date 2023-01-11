import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bundledetails as shared_bundledetails


@dataclass_json
@dataclasses.dataclass
class DescribeBundleResult:
    r"""DescribeBundleResult
     Result structure contains the details of the bundle. 
    """
    
    details: Optional[shared_bundledetails.BundleDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
