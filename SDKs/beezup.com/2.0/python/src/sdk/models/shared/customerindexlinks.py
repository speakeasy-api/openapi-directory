import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getuseraccountinfolink as shared_links_getuseraccountinfolink
from ..shared import links_getbillingperiodslink as shared_links_getbillingperiodslink
from ..shared import links_getcontractslink as shared_links_getcontractslink
from ..shared import links_getfriendinfolink as shared_links_getfriendinfolink
from ..shared import links_getofferlink as shared_links_getofferlink
from ..shared import links_getinvoiceslink as shared_links_getinvoiceslink
from ..shared import links_logoutlink as shared_links_logoutlink
from ..shared import links_getcustomerindexlink as shared_links_getcustomerindexlink
from ..shared import links_getstandardofferslink as shared_links_getstandardofferslink
from ..shared import links_getstoreslink as shared_links_getstoreslink


@dataclass_json
@dataclasses.dataclass
class CustomerIndexLinks:
    r"""CustomerIndexLinks
    Gives you want you can do on this API
    """
    
    account_info: shared_links_getuseraccountinfolink.LinksGetUserAccountInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountInfo') }})
    billing_periods: shared_links_getbillingperiodslink.LinksGetBillingPeriodsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriods') }})
    friend_info: shared_links_getfriendinfolink.LinksGetFriendInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendInfo') }})
    self: shared_links_getcustomerindexlink.LinksGetCustomerIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    standard_offers: shared_links_getstandardofferslink.LinksGetStandardOffersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardOffers') }})
    contracts: Optional[shared_links_getcontractslink.LinksGetContractsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracts') }})
    get_offer: Optional[shared_links_getofferlink.LinksGetOfferLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getOffer') }})
    invoices: Optional[shared_links_getinvoiceslink.LinksGetInvoicesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    logout: Optional[shared_links_logoutlink.LinksLogoutLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logout') }})
    stores: Optional[shared_links_getstoreslink.LinksGetStoresLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stores') }})
    
