import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apppkgsubscriptioninfo_links as shared_apppkgsubscriptioninfo_links
from ..shared import apppkg_subscriptiontype_enum as shared_apppkg_subscriptiontype_enum


@dataclass_json
@dataclasses.dataclass
class AppPkgSubscriptionInfo:
    r"""AppPkgSubscriptionInfo
    'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
    """
    
    links: shared_apppkgsubscriptioninfo_links.AppPkgSubscriptionInfoLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    callback_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    subscription_type: shared_apppkg_subscriptiontype_enum.AppPkgSubscriptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionType') }})
    
