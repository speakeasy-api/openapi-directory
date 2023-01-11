import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linktype as shared_linktype


@dataclass_json
@dataclasses.dataclass
class AppPkgNotificationLinks:
    r"""AppPkgNotificationLinks
    Links to resources related to this resource.
    """
    
    subscription: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
