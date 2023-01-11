import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generalname as shared_generalname
from ..shared import accessmethod as shared_accessmethod


@dataclass_json
@dataclasses.dataclass
class AccessDescription:
    r"""AccessDescription
    Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href=\"https://tools.ietf.org/html/rfc5280\">RFC 5280</a>.
    """
    
    access_location: shared_generalname.GeneralName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLocation') }})
    access_method: shared_accessmethod.AccessMethod = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessMethod') }})
    
