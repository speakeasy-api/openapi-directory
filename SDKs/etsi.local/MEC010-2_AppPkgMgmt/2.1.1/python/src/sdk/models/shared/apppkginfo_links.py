import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linktype as shared_linktype


@dataclass_json
@dataclasses.dataclass
class AppPkgInfoLinks:
    r"""AppPkgInfoLinks
    Links to resources related to this resource.
    """
    
    app_d: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appD') }})
    app_pkg_content: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgContent') }})
    self: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
