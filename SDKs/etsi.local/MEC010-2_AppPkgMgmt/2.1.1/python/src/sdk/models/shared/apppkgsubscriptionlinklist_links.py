import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linktype as shared_linktype
from ..shared import subscriptions_apppkgsubscription as shared_subscriptions_apppkgsubscription


@dataclass_json
@dataclasses.dataclass
class AppPkgSubscriptionLinkListLinks:
    r"""AppPkgSubscriptionLinkListLinks
    Links to resources related to this resource.
    """
    
    self: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    subscriptions: Optional[list[shared_subscriptions_apppkgsubscription.SubscriptionsAppPkgSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
