import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkattributeupdate as shared_linkattributeupdate
from ..shared import typedlinkspecifier as shared_typedlinkspecifier


@dataclass_json
@dataclasses.dataclass
class BatchUpdateLinkAttributes:
    r"""BatchUpdateLinkAttributes
    Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attribute_updates: list[shared_linkattributeupdate.LinkAttributeUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    typed_link_specifier: shared_typedlinkspecifier.TypedLinkSpecifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
