import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bundledetails as shared_bundledetails


@dataclass_json
@dataclasses.dataclass
class ListBundlesResult:
    r"""ListBundlesResult
     Result structure contains a list of all available bundles with details. 
    """
    
    bundle_list: Optional[list[shared_bundledetails.BundleDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
