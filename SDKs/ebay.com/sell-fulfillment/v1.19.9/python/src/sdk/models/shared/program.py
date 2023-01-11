import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postsaleauthenticationprogram as shared_postsaleauthenticationprogram
from ..shared import ebayfulfillmentprogram as shared_ebayfulfillmentprogram


@dataclass_json
@dataclasses.dataclass
class Program:
    r"""Program
    This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
    """
    
    authenticity_verification: Optional[shared_postsaleauthenticationprogram.PostSaleAuthenticationProgram] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticityVerification') }})
    fulfillment_program: Optional[shared_ebayfulfillmentprogram.EbayFulfillmentProgram] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentProgram') }})
    
