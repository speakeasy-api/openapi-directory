import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productadoptionpolicy as shared_productadoptionpolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class ProductAdoptionPolicyResponse:
    r"""ProductAdoptionPolicyResponse
    This is the response object returned by a call to getProductAdoptionPolicies.
    """
    
    product_adoption_policies: Optional[list[shared_productadoptionpolicy.ProductAdoptionPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAdoptionPolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
