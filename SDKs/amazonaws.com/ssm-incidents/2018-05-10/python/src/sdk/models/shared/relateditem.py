import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemidentifier as shared_itemidentifier


@dataclass_json
@dataclasses.dataclass
class RelatedItem:
    r"""RelatedItem
    Resources that responders use to triage and mitigate the incident.
    """
    
    identifier: shared_itemidentifier.ItemIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
