import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listingstructurepolicy as shared_listingstructurepolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class ListingStructurePolicyResponse:
    listing_structure_policies: Optional[list[shared_listingstructurepolicy.ListingStructurePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingStructurePolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
