import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apppkgsubscriptionlinklist_links as shared_apppkgsubscriptionlinklist_links


@dataclass_json
@dataclasses.dataclass
class AppPkgSubscriptionLinkList:
    r"""AppPkgSubscriptionLinkList
    'The data type represents a subscription link list of notification on application package management'
    """
    
    links: shared_apppkgsubscriptionlinklist_links.AppPkgSubscriptionLinkListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    
